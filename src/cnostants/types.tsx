export interface VariantClassType {
  primary?: string;
  secondary?: string;
  cVarient?: [string, string];
  custom?: string;
}

export type VariantKeys = keyof VariantClassType;
export interface CommonPropsType {
  className?: string;
  varient?: VariantKeys;
  cVarient?: [string, string];
  children: React.ReactNode;
}

export interface ButtonPropsType extends CommonPropsType {
  type?: string;
  //   someOther?: string;
}
export interface InputPropsType extends CommonPropsType {
  id?: string;
  type?: string;
  error?: string | object;
  //   someOther?: string;
}
export interface SelectPropsType extends CommonPropsType {
  error?: string;
  //   onClick : () =>;
  //   someOther?: string;
}
