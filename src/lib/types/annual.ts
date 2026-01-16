import type { Money, MoneySigned } from "./money";

export type Annual = {
  id: number;
  date: string;
  zak: number;
  nb: MoneySigned,
  real: Money
}