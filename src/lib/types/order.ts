import type { Client } from "./client";
import type { Money, MoneySigned } from "./money";

export type YourOutlayItem = {
  id: number;
  name: string;
  money: Money;
}

export type YourOutlay = {
  items: YourOutlayItem[];
  rest: YourOutlayItem;
  varranty: YourOutlayItem;
  yourTotal: {
    before: Money;
    after: Money;
  }
}

export type PayStatus = 'full' | 'part'

export type OrderStatus = 'done' | 'in-work' | 'deny'

export type IncomeItem = {
  id: number;
  name: string;
  money: MoneySigned;
  payStatus: PayStatus;
}

export type Summary = {
  id: number;
  name: string;
  money: MoneySigned;
}

export type Income = {
  items: IncomeItem[];
  outlay: IncomeItem;
  firmTotal: Money;
  firmTips: Money;
  additionalPayment: Money;
  kidness: Money;
  totalForOrder: Money;
  totalFirmBalance: Money;
  summary: Summary[]
}

export type Order = {
  id: string;
  date: string;
  address: string;
  status: OrderStatus;
  client: Client;
  yourOutlay: YourOutlay;
  income: Income;
}