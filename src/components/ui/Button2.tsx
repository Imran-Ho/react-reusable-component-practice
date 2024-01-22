import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../utils/cn";

type TRef = HTMLButtonElement;
type TVariant = "primary" | "danger" | "solid";
type TButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;
const Button2 = forwardRef<TRef, TButton>(
  ({ className, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "primary":
          return "btn-primary";

        case "danger":
          return "btn-danger";

        default:
          return "btn-solid";
      }
    };
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVariant(variant), className)}
      >
        reusable Button
      </button>
    );
  }
);
export default Button2;
