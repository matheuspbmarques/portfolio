import fonts from "@/configs/fonts";
import { Tecnologie, TecnologieProps } from "./Tecnologie";
import { SymbolToRight } from "../../SymbolToRight";

const tecnologies: Array<TecnologieProps> = [
  {
    stack: "Front-End",
    tecnologies: ["React", "NextJS", "Vue", "Angular"],
  },
  {
    stack: "Back-End",
    tecnologies: [
      "Express",
      "NestJS",
      "Laravel",
      "PHP",
      "Serverless",
      "AdonisJS",
    ],
  },
  {
    stack: "DevOps",
    tecnologies: ["VPS", "Docker", "CI/CD", "AWS", "NGINX", "Letsencrypt"],
  },
  {
    stack: "Outras",
    tecnologies: ["Git", "GitHub", "GitLab", "GitBucket", "Tailwind"],
  },
];

export function Tecnologies() {
  const renderTecnologies = tecnologies.map((tecnologie, index) => {
    return <Tecnologie key={index} {...tecnologie} />;
  });

  return (
    <section className="py-16 flex flex-col gap-4 bg-secundary">
      <div className="relative">
        <h2 className={`${fonts.baiJamjuree[700]} text-5xl px-8 text-center`}>
          Tecnologias
        </h2>
        <span className="absolute -left-[64px] -top-[96px]">
          <SymbolToRight />
        </span>
      </div>
      {renderTecnologies}
    </section>
  );
}
