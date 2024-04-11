import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
  disabled?: boolean;
}

const IconButton = ({ transparent, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        "border border-white/10 rounded-lg p-1",
        transparent ? "bg-black/10" : "bg-white/10",
        props.disabled ? "opacity-50" : null
      )}
    />
  );
};

export default IconButton;
