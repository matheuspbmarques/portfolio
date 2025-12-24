import fonts from "@/configs/fonts";

export type ExperienceProps = {
  company: string;
  position: string;
  period: { start: string; end: string };
  description: string;
  tecnologies: Array<string>;
};

export function Experience({
  company,
  position,
  period,
  description,
  tecnologies,
  isFirst
}: ExperienceProps & { isFirst: boolean }) {
  const renderTecnologies = tecnologies.map((tecnologie, index) => {
    return (
      <>
        {index > 0 ? " - " : ""}
        {tecnologie}
      </>
    );
  });

  return (
    <div className="flex gap-8">
      <div className="flex flex-col items-center relative ml-8">
        <div className="absolute w-4 h-4 bg-foreground rounded-full top-2" />
        {isFirst && <div className="absolute w-8 h-8 bg-foreground/25 top-0 rounded-full" />}
        <div className="h-2" />
        <div className="w-[1px] bg-foreground h-full" />
      </div>
      {/* Contents */}
      <div className="pr-8 flex flex-col gap-2">
        <h3 className={`text-2xl ${fonts.baiJamjuree[600]}`}>{company}</h3>
        <p className={`${fonts.baiJamjuree[400]}`}>
          <span className={`${fonts.baiJamjuree[600]}`}>Cargo:</span> {position}
        </p>
        <p className={`${fonts.baiJamjuree[400]}`}>
          <span className={`${fonts.baiJamjuree[600]}`}>Período:</span> {period.start} - {period.end}
        </p>
        <p className={`${fonts.baiJamjuree[400]}`}>
          <span className={`${fonts.baiJamjuree[600]}`}>Descrição:</span> {description}
        </p>
        <p className={`${fonts.baiJamjuree[400]}`}>
          <span className={`${fonts.baiJamjuree[600]}`}>Tecnologias:</span> {renderTecnologies}
        </p>
      </div>
    </div>
  );
}
