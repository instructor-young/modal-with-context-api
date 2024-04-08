import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

function Button({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonClassName =
    "px-4 py-2 bg-black text-white text-[15px] font-semibold rounded-md hover:opacity-85 active:opacity-70" +
    (className ? " " + className : "");

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
