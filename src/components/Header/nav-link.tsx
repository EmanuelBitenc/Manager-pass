import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
  checked?: boolean;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <a
      {...props}
      className={
        props.checked
          ? "font-medium text-sm  "
          : "font-medium text-sm text-zinc-300"
      }
    >
      {props.children}
    </a>
  );
};
export default NavLink;
