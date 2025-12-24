import fonts from "@/configs/fonts";
import { Fragment } from "react";

export type TecnologieProps = {
  stack: string;
  tecnologies: Array<string>;
};

export function Tecnologie({ stack, tecnologies }: TecnologieProps) {
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
      <h3 className={`${fonts.baiJamjuree[700]} text-2xl text-center`}>{stack}</h3>
      <p className={`${fonts.baiJamjuree[400]} text-center`}>{renderTecnologies}</p>
    </div>
  );
}
