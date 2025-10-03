import { primary, secondary } from "../../cnostants/tvar";

export const Button = ({
  className,
  varient,
  cVarient,
  children,
  ...props
}) => {
  let varientClass = {
    primary: `text-${primary} hover:text-${secondary} border border-${primary} hover:border-${secondary}`,
    secondary: `text-${secondary} hover:text-${primary} border border-${secondary} hover:border-${primary}`,
    ...(cVarient &&
      cVarient?.length === 2 && {
        custom: `text-${cVarient[0]} hover:text-${cVarient[1]} border border-${cVarient[1]} hover:border-${cVarient[0]}`,
      }),
  };

  let classes = `${className ? className : ""} 
    ${cVarient ? varientClass.custom : ""} 
    ${varient ? varientClass[varient] : ""}`;

  return (
    <button
      className={`${classes} px-3 py-2 rounded-lg cursor-pointer duration-150 ease-in-out select-none`}
      {...props}
    >
      {children}
    </button>
  );
};
