import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../service/merchant.service';
import { IPagination, IMerchant, IMerchantFilter } from '@utils/interfaces';
import { Pagination } from '@utils/models';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPagedResult } from '@app/panel/common/paged-result';
import { MerchantStateType2LabelMapping } from '../../domain/merchant-state-type';
import { BreadcrumbService } from '@app/panel/service/breadcrumb.service';

@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit {

  public MerchantStateType2LabelMapping = MerchantStateType2LabelMapping;

  pagination: IPagination = new Pagination();

  formGroup = new FormGroup({
    searchText: new FormControl(),
    searchType: new FormControl()
  });

  merchants: IMerchant[];

  constructor(private merchantService: MerchantService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.setItems([{ name: 'Configuration', slug: '/panel/merchants' }, { name: 'Merchants' }]);
    const pagedResult: IPagedResult<IMerchant> = (<IPagedResult<IMerchant>>this.route.snapshot.data['pagedResult']);

    if (pagedResult) {
      this.merchants = pagedResult.content;
      this.pagination.total = pagedResult.totalPages;
    }

    this.initForm();
  }

  initForm() {
    this.formGroup.get("searchType").setValue("all");
    this.formGroup.get("searchText").valueChanges.subscribe(() => { this.showHighlight = false; });
  }


  showHighlight: boolean = false;
  highlight(column: string): boolean {
    let type: string = this.formGroup.get("searchType").value;

    if (type == "all")
      return true;

    return this.formGroup.get("searchType").value == column;
  }

  search(resetPaging: boolean = true) {
    if (this.formGroup.valid) {
      this.formGroup.disable();

      if (resetPaging === true)
        this.pagination.current = 1;

      let searchType = this.formGroup.get("searchType").value;
      let searchText = this.formGroup.get("searchText").value;

      let filter: IMerchantFilter = {};

      if (searchType == null || searchType == "" || searchType.trim() == "") {
        searchType = "all";
        this.formGroup.get("searchType").setValue(searchType);
      }


      if (searchType == "all") {
        filter = {
          name: searchText,
          login: searchText,
          allowed_ip_address: searchText
        }
      }
      else {
        filter = {
          name: searchType == "name" ? searchText : null,
          login: searchType == "login" ? searchText : null,
          allowed_ip_address: searchType == "allowed_ip_address" ? searchText : null
        }
      }

      this.merchantService.search(this.pagination, filter)
        .subscribe(result => {
          this.formGroup.enable();
          this.merchants = result.content;
          this.pagination.total = result.totalPages;
          this.showHighlight = true;
        }, (error) => {
          this.formGroup.enable();
        });
    }
  }

  
  escape = (str: string) =>  str.replace(/[\[\]\/{}()*+?.\\^$|-]/g, "\\$&");
  
  get searchText(): string {
    if (this.showHighlight) {
      let expression = this.formGroup.get("searchText").value;
      if (expression) {
        return this.escape(expression);
      }
    }
    
    return null;
  }

  changePage(event: number) {
    this.pagination.current = event;
    this.search(false);
  }

  clear() {
    this.formGroup.reset();
    this.search();
  }

  export() {
    var newPagination = new Pagination();
    newPagination.size = this.pagination.size * this.pagination.total
    this.merchantService.search(newPagination, this.formGroup.value)
      .subscribe(result => {
        this.formGroup.enable();
        const query = result.content.map(t => t.id).join(',');
        this.merchantService.exportRows(query).subscribe(data => {
          const a = document.createElement('a');

          a.href = window.URL.createObjectURL(data);
          a.download = 'export.xls';
          a.click();
        });
      }, (error) => {
        this.formGroup.enable();
      });
  }


  onSearchTypeChange(type: string) {
    console.log(type);
  }

}
