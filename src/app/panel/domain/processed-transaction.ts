// for delete after new transaction table

export class ProcessedTransaction {
  constructor(
    public id: string,
    public unique_id: string,
    public name: string,
    public status: string,
    public type: string,
    public created_at: Date
  ) {}
}
