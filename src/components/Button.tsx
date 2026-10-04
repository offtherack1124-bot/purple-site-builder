import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Props = { children: ReactNode; variant?: "dark" | "outline" | "light"; className?: string };
const classes = (variant: Props["variant"] = "dark", extra = "") => `site-button site-button--${variant} ${extra}`;
export function Button({ children, variant = "dark", className = "", ...props }: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={classes(variant, className)} {...props}>{children}</button>;
}
export function ButtonLink({ children, variant = "dark", className = "", ...props }: Props & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={classes(variant, className)} {...props}>{children}</a>;
}
