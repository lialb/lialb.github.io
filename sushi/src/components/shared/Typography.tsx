import React from "react";
import classNames from "classnames";

export type TypographyVariant = "title" | "heading" | "body" | "lead" | "caption";

const variantClassName: Record<TypographyVariant, string> = {
  title: "pt-[5%] text-2xl font-bold tracking-tight sm:text-3xl",
  heading: "mb-2 text-xl font-semibold",
  body: "mb-4 text-base last:mb-0",
  lead: "w-full text-center text-[calc(12px+1vw)] text-icon-main",
  caption: "mb-0 pb-[2%] text-base",
};

const variantElement: Record<TypographyVariant, "h1" | "h2" | "p"> = {
  title: "h1",
  heading: "h2",
  body: "p",
  lead: "p",
  caption: "p",
};

type Props = {
  variant: TypographyVariant;
  className?: string;
  children: React.ReactNode;
};

export default function Typography({
  variant,
  className,
  children,
}: Props): React.ReactElement {
  const Component = variantElement[variant];
  return (
    <Component
      className={classNames(variantClassName[variant], className)}
    >
      {children}
    </Component>
  );
}
