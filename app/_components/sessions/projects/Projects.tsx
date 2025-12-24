import fonts from "@/configs/fonts";
import { SymbolToUp } from "../../SymbolToUp";
import { Project, ProjectProps } from "./Project";

const projects: Array<ProjectProps> = [
  {
    title: "GeClinica",
    description:
      "Um gerenciador de clinicas com a ideia de ter uma tela para cada área da clínica: dono/administrador, atendente, médico, com a intenção de disponibilizar end-points da API para a clinica integrar o sistema ao seus sistema. O MVP está em desenvolvimento com probabilidade de lançamento em Janeiro.",
    tecnologies: ["NextJS", "NestJS"],
  },
  {
    title: "SMSBot",
    description:
      "Sistema de BOT de SMS, capaz de enviar mensagem para vários contatos ao mesmo tempo, seja agendado ou não, e responder as respostas de acordo com a resposta esperada. Tendo integração com gateway de pagamento Asaas, o usuário pode comprar seus créditos via PIX, para assim enviar seus SMS’s. O sistema também conta com demarcadores na mensagem para identificar aonde trocar o *nome* pelo nome do cliente do usuário (nome do contato) para humanizar ainda mais as mensagens enviadas.",
    tecnologies: [
      "NextJS",
      "Express",
      "NGINX",
      "Letsencrypt",
      "MongoDB",
      "Docker",
      "VPS",
      "Hostinger",
    ],
  },
  {
    title: "DOC-API-PHP",
    description:
      "Um sistema feito em PHP para documentar API’s usando apenas um arquivo JSON, podendo até mesmo aplicar ícones do Google Icons.",
    tecnologies: ["PHP", "HTML", "CSS", "JavaScript"],
  },
];

export function Projects() {
  const renderProjects = projects.map((project, index) => {
    return <Project key={index} {...project} />;
  });

  return (
    <section className="py-16 flex flex-col gap-4">
      <div className="relative">
        <h2 className={`${fonts.baiJamjuree[700]} text-5xl px-8`}>Projetos</h2>
        <span className="absolute -top-[96px] -right-[64px]">
          <SymbolToUp />
        </span>
      </div>
      {renderProjects}
    </section>
  );
}
