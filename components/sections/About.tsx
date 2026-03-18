"use client";

import Image from "next/image";
import fonts from "@/configs/fonts";

interface AboutProps {
  id?: string;
}

export default function About({ id }: AboutProps) {
  return (
    <section
      id={id}
      className="flex gap-2 px-6 py-8 sm:gap-8 items-center max-w-5xl mx-auto"
    >
      <div className="flex-1 flex flex-col gap-8">
        <h2
          className={`${fonts.kanitText.className} text-slate-100 text-2xl sm:text-3xl`}
        >
          Olá, me chamo Matheus, sou dev {`<FullStack />`}
        </h2>
        <a
          href="matheus-marques.pdf"
          download
          className={`p-2 rounded-lg custom-gradient w-max ${fonts.kanitText.className} text-slate-100`}
        >
          Baixar Currículo
        </a>
      </div>
      <div>
        <div className="flex w-40 h-40 overflow-hidden rounded-full items-center justify-center sm:w-50 sm:h-50">
          <Image
            alt="Minha foto"
            src={"/assets/images/me.webp"}
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
}
