import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";

interface SelectionListProps {
  nameInHeader?: string;
  title?: string;
  sectionId?: string;
  sectionComponent: ({ id }: { id?: string }) => React.JSX.Element;
}

const sectionsList: Array<SelectionListProps> = [
  {
    nameInHeader: "Sobre",
    sectionId: "about",
    sectionComponent: About,
  },
  {
    nameInHeader: "Projetos",
    title: "Projetos Reais",
    sectionId: "projects",
    sectionComponent: Projects,
  },
  {
    nameInHeader: "Tecnologias",
    title: "Tecnologias",
    sectionId: "technologies",
    sectionComponent: Technologies,
  },
  {
    nameInHeader: "Contato",
    title: "Contato",
    sectionId: "contact",
    sectionComponent: Contact,
  },
];

export default sectionsList;
