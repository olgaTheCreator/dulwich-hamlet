import { ButtonPropsInterface } from "../utilities/types/types";

const Button = ({ children, color, ...rest }: ButtonPropsInterface) => {
  return (
    <button
      className={`rounded-md bg-${color} text-text-base h-8 w-8 m-2 border-4 border-primary transition-all duration-300`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
};
export default Button;
