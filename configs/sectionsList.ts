//Sections
import About from "@/components/About"
import Projects from "@/components/Projects"
import Technologies from "@/components/Technologies"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

interface SelectionListProps{
    nameInHeader?: string,
    title?: string,
    sectionId?: string,
    sectionComponent: ({ id }:{ id?:string }) => React.JSX.Element
}

const sectionsList:Array<SelectionListProps> = [
    {
        nameInHeader: 'Sobre mim',
        sectionId: 'about',
        sectionComponent: About
    },
    {
        nameInHeader: 'Projetos',
        title: 'Projetos',
        sectionId: 'projects',
        sectionComponent: Projects
    },
    {
        nameInHeader: 'Tecnologias',
        title: 'Tecnologias',
        sectionId: 'technologies',
        sectionComponent: Technologies
    },
    {
        nameInHeader: 'Contato',
        title: 'Contato',
        sectionId: 'contact',
        sectionComponent: Contact
    },
    {
        sectionComponent: Footer
    }
]

export default sectionsList