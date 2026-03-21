import ProjectCard from "../ProjectCard";
import projectsList from "@/configs/projectsList";
import fonts from "@/configs/fonts";
import { H2 } from "../ui/H2";

interface ProjectsProps {
  id?: string;
}

export default function Projects({ id }: ProjectsProps) {
  const renderProjects = projectsList.map((project, i) => {
    return <ProjectCard key={i} {...project} />;
  });

  return (
    <section id={id} className="bg-slate-800">
      <div className="flex flex-col px-6 py-8 gap-4 max-w-5xl mx-auto">
        <H2>Projetos</H2>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          {renderProjects}
        </div>
      </div>
    </section>
  );
}
