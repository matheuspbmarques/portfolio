//Components
import ProjectCard from "../ProjectCard"

//Configs
import projectsList from "@/configs/projectsList"
import fonts from "@/configs/fonts"

interface ProjectsProps{
    id?: string
}

export default function Projects({ id }:ProjectsProps){

    const renderProjects = projectsList.map((project, i) => {
        return(
            <ProjectCard
                key={i}
                access={project.url}
                image={project.image}
                description={project.description}
                title={project.title}
            />
        )
    })

    return(
        <section id={id} className="bg-slate-800">
            <div className="flex flex-col px-6 py-8 gap-4 max-w-3xl mx-auto">
                <h2 className={`${fonts.kanitSmallTitle.className} text-4xl text-slate-100`}>Projetos</h2>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2">{ renderProjects }</div>
            </div>
        </section>
    )
}