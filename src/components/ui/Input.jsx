import { primary, secondary } from "../../cnostants/tvar";

export const Input = ({
  type,
  className,
  varient = "primary",
  cVarient,
  ...props
}) => {
  let varientClass = {
    // primary: `border border-purple-500`,
    // primary: `text-sm font-normal px-4 py-3 border border-[#C9C9C9] focus:border focus:border-[#EC6608] hover:border hover:border-[#EC6608] rounded focus:outline-none ease-in-out duration-150`,
    primary: `focus:shadow-xl/15 shadow-${secondary} text-${primary} hover:text-${secondary} focus:outline-[0] focus:text-${secondary} ative:text-${secondary} border-1 border-${primary} focus:border-${secondary}`,
    secondary: `focus:shadow-xl/15 shadow-${primary} text-${secondary} hover:text-${primary} focus:outline-[0] focus:text-${primary} ative:text-${primary} border-1 border-${secondary} focus:border-${primary}`,
    ...(cVarient &&
      cVarient?.length === 2 && {
        custom: `focus:shadow-xl/15 shadow-${cVarient[1]} text-${cVarient[0]} hover:text-${cVarient[1]} focus:outline-[0] focus:text-${cVarient[1]} ative:text-${cVarient[1]} border-1 border-${cVarient[1]} focus:border-${cVarient[0]}`,
      }),
  };

  let classes = `
    ${cVarient ? varientClass.custom : ""} 
    ${varient ? varientClass[varient] : ""} ${className ? className : ""}`;

  return (
    <input
      type={type}
      className={`${
        type === "text" || type === "number" || type === "email"
          ? "px-3 py-2 rounded-lg w-full duration-150 ease-in-out"
          : ""
      } ${classes}`}
      // className="text-sm font-normal px-4 py-3 border border-[#C9C9C9] focus:border focus:border-[#EC6608] hover:border hover:border-[#EC6608] rounded focus:outline-none ease-in-out duration-150"
      {...props}
    />
  );
};
