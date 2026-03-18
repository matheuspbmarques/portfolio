import Link from "next/link";
import fonts from "@/configs/fonts";

interface CustomLinkProps {
  text?: string;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function CustomLink({ text, link }: CustomLinkProps) {
  return (
    <Link
      href={`#${link}`}
      className={`${fonts.kanitText.className} text-sm text-slate-100 p-2 flex flex-col group`}
    >
      <span>{text}</span>
      <span className="w-0 h-0.5 bg-slate-100 duration-300 group-hover:last:w-full shadow-[0_0_25px_#06B6D4] bg-linear-90 from-blue-default to-purple-default" />
    </Link>
  );
}
