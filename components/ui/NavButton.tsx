"use client";

import fonts from "@/configs/fonts";

type CustomLinkProps = {
  text?: string;
  link?: string;
};

export default function NavButton({ text, link }: CustomLinkProps) {
  return (
    <button
      className={`${fonts.kanitText.className} text-sm text-slate-100 p-2 flex flex-col group cursor-pointer`}
      onClick={() => {
        if (link) {
          const sectionTop = Number(
            document.getElementById(link)?.getBoundingClientRect().top,
          );

          const scrollTo =
            sectionTop < 0
              ? window.scrollY - Math.abs(sectionTop)
              : window.scrollY + Math.abs(sectionTop);

          window.scrollTo({
            top: scrollTo - 86,
          });
        }
      }}
    >
      <span>{text}</span>
      <span className="w-0 h-0.5 bg-slate-100 duration-300 group-hover:last:w-full shadow-[0_0_25px_#06B6D4] bg-linear-90 from-blue-default to-purple-default" />
    </button>
  );
}
