import Image from "next/image";
import fonts from "@/configs/fonts";
import socialMediaList from "@/configs/socialMediaList";
import Link from "next/link";
import Icons from "../ui/Icons";

interface AboutProps {
  id?: string;
}

export default function About({ id }: AboutProps) {
  const renderSocialMedia = socialMediaList.map((socialMedia, i) => {
    return (
      <li key={i}>
        <Link href={socialMedia.url}>
          <Icons name={socialMedia.icon} />
        </Link>
      </li>
    );
  });

  return (
    <section
      id={id}
      className="flex flex-col-reverse items-center px-6 pb-8 pt-2 sm:flex-row sm:items-start sm:gap-8 max-w-5xl mx-auto"
    >
      <div className="flex flex-col items-center mt-4 sm:items-start">
        <h1
          className={`${fonts.kanitSmallTitle.className} text-slate-100 text-2xl text-center sm:text-5xl sm:leading-12 lg:text-7xl sm:text-left lg:leading-20`}
        >
          Matheus Marques,
          <br />
          Desenvolvedor FullStack
        </h1>
        <h2
          className={`${fonts.kanitText.className} text-slate-100 text-base text-center mt-2 sm:mt-4 sm:text-left sm:text-2xl`}
        >
          Profissional autodidata com mais de 4 anos de experiência na área de
          desenvolvimento de sistemas.
        </h2>
        <ul className="flex items-center mt-8 gap-4">{renderSocialMedia}</ul>
        <a
          href="matheus-marques.pdf"
          download
          className={`py-2 px-4 rounded-full custom-gradient w-max ${fonts.kanitText.className} text-slate-100 mt-8`}
        >
          Baixar Currículo
        </a>
      </div>
      <div>
        <div className="flex max-sm:max-w-32 max-sm:max-h-32 sm:w-64 sm:h-64 overflow-hidden rounded-full items-center justify-center">
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
