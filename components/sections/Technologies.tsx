import fonts from "@/configs/fonts";
import technologiesList from "@/configs/technologiesList";
import { H2 } from "../ui/H2";

interface TechnologiesProps {
  id?: string;
}

export default function Technologies({ id }: TechnologiesProps) {
  const renderTechnologies = technologiesList.map((technology, i) => {
    return (
      <li
        key={i}
        className={`custom-gradient p-0.5 rounded-lg flex cursor-pointer`}
      >
        <div
          className={`h-full flex-1 bg-slate-900 rounded-md ${fonts.kanitText.className} text-slate-100 flex justify-between p-2`}
        >
          <span>{technology}</span>
        </div>
      </li>
    );
  });

  return (
    <section id={id} className="max-w-5xl flex flex-col mx-auto pt-8 px-6">
      <H2>Tecnologias</H2>
      <ul className="flex flex-col gap-2 overflow-hidden pt-4 pb-8 sm:grid sm:grid-cols-3">
        {renderTechnologies}
      </ul>
    </section>
  );
}
