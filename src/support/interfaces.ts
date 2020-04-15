export interface CreditInterface {
  [key: string]: string | number;
  uuid: string;
  name: string;
  firstValue: number;
  currentValue: number;
  minInstallment: number;
}
