import fonts from "@/configs/fonts";
import { ProjectsList } from "@/configs/projectsList";
import { Fragment } from "react/jsx-runtime";

export default function ProjectCard({
  title,
  description,
  tecnologies,
}: ProjectsList) {
  const renderDescription = description.map((descriptionText, index) => {
    return (
      <Fragment key={index}>
        {index > 0 && (
          <>
            <br />
            <br />
          </>
        )}
        <span>{descriptionText}</span>
      </Fragment>
    );
  });

  const renderTecnologies = tecnologies.map((tecnologie, index) => {
    return (
      <li
        key={index}
        className={`${fonts.kanitText.className} text-sm text-white custom-gradient p-px rounded-full select-none`}
      >
        <span className="py-1 px-2 bg-slate-800 block rounded-full">{tecnologie}</span>
      </li>
    );
  });

  return (
    <div className="w-full custom-gradient rounded-2xl p-0.5">
      <div className="w-full h-full bg-slate-800 rounded-[14px] p-4 flex flex-col gap-4 md:flex-col">
        {/* <div className="w-full rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="Imagem do projeto"
            width={1024}
            height={768}
          />
        </div> */}
        <div className="flex flex-col gap-4 sm:flex-1">
          <div className="flex flex-col gap-2 sm:flex-1">
            <h3
              className={`${fonts.kanitSmallTitle.className} text-xl text-slate-100`}
            >
              {title}
            </h3>
            <p className={`${fonts.kanitText.className} text-slate-100`}>
              {renderDescription}
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-1">{renderTecnologies}</ul>
      </div>
    </div>
  );
}
