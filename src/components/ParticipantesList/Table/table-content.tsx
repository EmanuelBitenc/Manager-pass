import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableContentProps extends ComponentProps<"td"> {}

const TableContent = (props: TableContentProps) => {
  return (
    <td
      {...props}
      className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}
    />
  );
};

export default TableContent;
