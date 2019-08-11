import {IMastercardFraudReport} from '@utils/interfaces';

export class MastercardFraudReport implements IMastercardFraudReport {
  id = null;
  issuer = null;
  acquirer = null;
  acquirer_reference = null;
  card_number = null;
  received_date = null;
  customer_change_date = null;
  customer_posted_date = null;
  transaction_date = null;
  amount_in_usd = null;
  transaction_time = null;
  amount = null;
  currency = null;
  card_type = null;
  descriptor = null;
  merchant_name = null;
  merchant_number = null;
  merchant_city = null;
  merchant_state = null;
  merchant_country = null;
  merchant_postal_code = null;
  merchant_category_code = null;
  terminal_attendance_indicator = null;
  cardholder_presence_indicator = null;
  cat_level = null;
  terminal_capability_indicator = null;
  electronic_commerce_indicator = null;
  pos_entry_mode = null;
  industry_code = null;
  terminal_id = null;
  fraud_type_code = null;
  sub_fraud_type_code = null;
  chargeback_indicator = null;
  cash_back_amount = null;
  cash_back_currency_code = null;
  account_status_indicator = null;
  issuing_transit_routing_number = null;
  acquiring_transit_routing_number = null;
  serial_id_number = null;
  trace_id_number = null;
  account_device_type = null;
  secure_code = null;
  avs_response_code = null;
  card_present_indicator = null;
  terminal_operating_code = null;
  processed_transaction_id = null;
  merchant_id = null;
  created_at = null;
  updated_at = null;

  constructor(c?: IMastercardFraudReport) {
    if (c) {
      this.id = c.id ? c.id : null;
      this.issuer = c.issuer ? c.issuer : null;
      this.acquirer = c.acquirer ? c.acquirer : null;
      this.acquirer_reference = c.acquirer_reference ? c.acquirer_reference : null;
      this.card_number = c.card_number ? c.card_number : null;
      this.received_date = c.received_date ? c.received_date : null;
      this.customer_change_date = c.customer_change_date ? c.customer_change_date : null;
      this.customer_posted_date = c.customer_posted_date ? c.customer_posted_date : null;
      this.transaction_date = c.transaction_date ? c.transaction_date : null;
      this.amount_in_usd = c.amount_in_usd ? c.amount_in_usd : null;
      this.transaction_time = c.transaction_time ? c.transaction_time : null;
      this.amount = c.amount ? c.amount : null;
      this.currency = c.currency ? c.currency : null;
      this.card_type = c.card_type ? c.card_type : null;
      this.descriptor = c.descriptor ? c.descriptor : null;
      this.merchant_name = c.merchant_name ? c.merchant_name : null;
      this.merchant_number = c.merchant_number ? c.merchant_number : null;
      this.merchant_city = c.merchant_city ? c.merchant_city : null;
      this.merchant_state = c.merchant_state ? c.merchant_state : null;
      this.merchant_country = c.merchant_country ? c.merchant_country : null;
      this.merchant_postal_code = c.merchant_postal_code ? c.merchant_postal_code : null;
      this.merchant_category_code = c.merchant_category_code ? c.merchant_category_code : null;
      this.terminal_attendance_indicator = c.terminal_attendance_indicator ? c.terminal_attendance_indicator : null;
      this.cardholder_presence_indicator = c.cardholder_presence_indicator ? c.cardholder_presence_indicator : null;
      this.cat_level = c.cat_level ? c.cat_level : null;
      this.terminal_capability_indicator = c.terminal_capability_indicator ? c.terminal_capability_indicator : null;
      this.electronic_commerce_indicator = c.electronic_commerce_indicator ? c.electronic_commerce_indicator : null;
      this.pos_entry_mode = c.pos_entry_mode ? c.pos_entry_mode : null;
      this.industry_code = c.industry_code ? c.industry_code : null;
      this.terminal_id = c.terminal_id ? c.terminal_id : null;
      this.fraud_type_code = c.fraud_type_code ? c.fraud_type_code : null;
      this.sub_fraud_type_code = c.sub_fraud_type_code ? c.sub_fraud_type_code : null;
      this.chargeback_indicator = c.chargeback_indicator ? c.chargeback_indicator : null;
      this.cash_back_amount = c.cash_back_amount ? c.cash_back_amount : null;
      this.cash_back_currency_code = c.cash_back_currency_code ? c.cash_back_currency_code : null;
      this.account_status_indicator = c.account_status_indicator ? c.account_status_indicator : null;
      this.issuing_transit_routing_number = c.issuing_transit_routing_number ? c.issuing_transit_routing_number : null;
      this.acquiring_transit_routing_number = c.acquiring_transit_routing_number ? c.acquiring_transit_routing_number : null;
      this.serial_id_number = c.serial_id_number ? c.serial_id_number : null;
      this.trace_id_number = c.trace_id_number ? c.trace_id_number : null;
      this.account_device_type = c.account_device_type ? c.account_device_type : null;
      this.secure_code = c.secure_code ? c.secure_code : null;
      this.avs_response_code = c.avs_response_code ? c.avs_response_code : null;
      this.card_present_indicator = c.card_present_indicator ? c.card_present_indicator : null;
      this.terminal_operating_code = c.terminal_operating_code ? c.terminal_operating_code : null;
      this.processed_transaction_id = c.processed_transaction_id ? c.processed_transaction_id : null;
      this.merchant_id = c.merchant_id ? c.merchant_id : null;
      this.created_at = c.created_at ? c.created_at : null;
      this.updated_at = c.updated_at ? c.updated_at : null;
    }
  }
}
