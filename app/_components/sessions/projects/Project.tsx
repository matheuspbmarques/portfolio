import fonts from "@/configs/fonts";
import { Fragment } from "react";

export type ProjectProps = {
  title: string;
  description: string;
  tecnologies: Array<string>;
};

export function Project({ title, description, tecnologies }: ProjectProps) {
  const renderTecnologies = tecnologies.map((tecnologie, index) => {
    return (
      <Fragment key={index}>
        {index > 0 ? " - " : ""}
        {tecnologie}
      </Fragment>
    );
  });

  return (
    <div className="flex flex-col gap-2 px-8">
      <h3 className={`${fonts.baiJamjuree[700]} text-2xl`}>{title}</h3>
      <p className={`${fonts.baiJamjuree[400]}`}>
        <span className={`${fonts.baiJamjuree[700]}`}>Descrição:</span> {description}
      </p>
      <p className={`${fonts.baiJamjuree[400]}`}>
        <span className={`${fonts.baiJamjuree[700]}`}>Tecnologias:</span> {renderTecnologies}
      </p>
    </div>
  );
}
