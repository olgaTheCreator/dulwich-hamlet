import { buttonVariants } from "../themes/colorVariants";
import { ButtonPropsInterface } from "../utilities/types/types";

export const Button = ({ children, color, ...rest }: ButtonPropsInterface) => {
  return (
    <button
      className={`rounded-md ${buttonVariants[color]} text-text-base h-8 w-8 m-2 transition-all duration-300`}
      {...rest}
    >
      {children}
    </button>
  );
};
