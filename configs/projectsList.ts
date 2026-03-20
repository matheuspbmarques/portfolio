import { UrlObject } from "url";

export type ProjectsList = {
  image: string;
  title: string;
  description: Array<string>;
  url: string | UrlObject;
  tecnologies: Array<string>;
};

const projectsList: Array<ProjectsList> = [
  {
    title: "SMEDIM ChatBot",
    description: [
      "Bot de atendimento para o WhatsApp, contando com multiatendimento humano, onde cada atendente tem seu login e atendimento separado",
      "Para isso, o back-end NodeJS com Express é integrado a API da Meta. Quando o back-end recebe a mensagem do paciente pelo webhook da Meta, a mensagem é enviada para o front-end usando socket.io",
      "O front-end React com NextJS e Material UI, envia as mensagens do atendente para o back-end.",
      "Front-end, back-end e banco de dados são hospedados em uma VPS própria, configurada com Docker, NGINX, Letsencrypt e Certbot",
    ],
    image: "/assets/images/projects/smedim-whatsapp-chatbot.webp",
    url: "https://smedim.barcasoft.com",
    tecnologies: [
      "ReactJS",
      "NextJS",
      "Material UI",
      "NodeJS",
      "Express",
      "WhatsApp Business API Oficial",
      "Socket.io",
      "MongoDB",
      "Docker",
      "NGINX",
      "Letsencrypt",
      "Certbot",
      "Hostinger",
    ],
  },
  {
    title: "GTISS",
    description: [
      "O GTISS é um projeto pessoal que gera XML no padrão TISS definido pela a ANS (Agência Nacional de Saúde) no qual as clínicas enviam para as operadoras de saúde (empresas de planos de saúde) para poderem faturar os exames, consultas e atendimentos",
      "Front-end com ReactJS com NextJS com Material",
      "Back-end com NodeJS com Express com banco de dados MongoDB",
      "Tanto o Front-End quanto o Back-End estão hospedados na minha VPS no qual foi configurada com Docker, NGINX, Letsencrypt e Certbot",
    ],
    image: "/assets/images/projects/gtiss.webp",
    url: "https://gtiss.com",
    tecnologies: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "Express",
      "MongoDB",
      "Docker",
      "NGINX",
      "Letsencrypt",
      "Certbot",
      "XML"
    ],
  },
  {
    title: "SMSBot",
    description: [
      "O SMSBot é um disparador de SMS, seja para autenticação ou marketing. Faz envio imediato ou agendado, seja para alguns contatos que podem ser informados manualmente, ou contatos importados de CSV ou até mesmo listas de contatos cadastradas pelo usuário próprio SMSBot.",
      "O sistema permite o usuário fazer o cadastro de listas de contatos manualmente, ou importando um CSV.",
      "Contém relatórios de SMS enviados e recebidos, assim como a exportação desse relatório",
      "Também contém uma sessão de desenvolvedor, aonde o usuário pode integrar o SMSBot ao seu sistema da melhor forma que achar",
      "Para o administrador do sistema, tem a gestão dos usuários, podendo ver o crédito de cada usuário, adicionar crédito para um usuário, desativar o usuário e até mesmo acessar a conta diretamente",
      "O back-end foi feito com NodeJS e Express, e foi integrado com o gateway de pagamento Asaas. Para confirmação dos pagamentos, usei o socket.io para enviar a confirmação do pagamento o front-end",
      "No front-end usei ReactJS com NextJS e Material UI na primeira versão. Na segunda versão já criei um UI/UX para o sistema e fiz apenas a alteração da interface",
      "Front-end, back-end e banco de dados foram configurados usando Docker na VPS do cliente, configurado no GitHub Actions para fazer o deploy automaticamente quando tem commit na branch main.",
    ],
    image: "/assets/images/projects/smsbot.webp",
    url: "https://app.smsbot.chat",
    tecnologies: [
      "ReactJS",
      "NextJS",
      "Material UI",
      "NodeJS",
      "Express",
      "Socket.io",
      "Asaas",
      "Docker",
      "Gateway de Pagamento",
      "Figma",
      "CI/CD",
      "GitHub Actions",
      "NGINX",
      "Letsencrypt",
      "Certbot",
      "VPS",
      "Hostinger",
      "MongoDB",
    ],
  },
];

export default projectsList;
