import { ReactElement, cloneElement } from "react";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({ children, activeClassName, ...rest }: ActiveLinkProps) => {
  const { pathname } = useRouter();
 
  const className = pathname.replace("/[slug]", "") == rest.href ? activeClassName : "";

  return (
    <Link {...rest}>{cloneElement(children, { className })}</Link>
  )
}