import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
  state?: boolean;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <a
      {...props}
      className={
        props.state
          ? "font-medium text-sm  "
          : "font-medium text-sm text-zinc-300"
      }
    >
      {props.children}
    </a>
  );
};
export default NavLink;
