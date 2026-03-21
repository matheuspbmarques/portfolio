import fonts from "@/configs/fonts";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function H2({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h2
      className={`${fonts.kanitSmallTitle.className} text-4xl text-slate-100 ${className}`}
      {...props}
    />
  );
}
