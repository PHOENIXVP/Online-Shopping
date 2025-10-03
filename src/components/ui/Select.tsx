import { SelectPropsType, VariantClassType } from "@/cnostants/types";
import { primary, secondary } from "../../cnostants/tvar";

export const Select = ({
  className,
  error,
  varient = "primary",
  cVarient,
  children,
  ...props
}: SelectPropsType) => {
  let varientClass: VariantClassType = {
    primary: `focus:shadow-xl/15 shadow-${secondary} text-${primary} hover:text-${secondary} focus:outline-[0] focus:text-${secondary} ative:text-${secondary} border-1 border-${primary} focus:border-${secondary}`,
    secondary: `focus:shadow-xl/15 shadow-${primary} text-${secondary} hover:text-${primary} focus:outline-[0] focus:text-${primary} ative:text-${primary} border-1 border-${secondary} focus:border-${primary}`,
    ...(cVarient &&
      cVarient?.length === 2 && {
        custom: `focus:shadow-xl/15 shadow-${cVarient[1]} text-${cVarient[0]} hover:text-${cVarient[1]} focus:outline-[0] focus:text-${cVarient[1]} ative:text-${cVarient[1]} border-1 border-${cVarient[1]} focus:border-${cVarient[0]}`,
      }),
  };

  let classes = `${error ? "border-red-500" : ""} ${className ? className : ""} 
    ${cVarient ? varientClass.custom : ""} 
    ${varient ? varientClass[varient] : ""}`;

  return (
    <select
      className={`${classes} px-3 py-2 rounded-lg w-full duration-150 ease-in-out`}
      {...props}
    >
      {children}
    </select>
  );
};
