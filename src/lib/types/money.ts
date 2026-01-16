export type Currency = 'RUB'

export type MoneySigned = {
  value: number,
  currency: Currency,
  sign: boolean // - false, + true
}

export type Money = {
  value: number,
  currency: Currency,
}