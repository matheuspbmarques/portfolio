import { UrlObject } from 'url';

interface ProjectsListProps{
    image: string,
    title: string,
    description: string,
    url: string | UrlObject
};

const projectsList:Array<ProjectsListProps> = [
    {
        title: 'SMEDIM - WhatsApp - ChatBot',
        description: 'Criado para agilizar o atendimento dos pacientes via WhatsApp. Foi utilizado a API oficial da Meta (antigo Facebook), com front-end (para o atendente da clínica) feito com React usando Material UI para agiilizar o processo de criação e back-end feito em Node com Express e socker.io. Tanto o front-end quanto o back-end foram hospedados em uma VPS minha na qual configurei com NGINX, Letsencrypt e Docker.',
        image: '/assets/images/projects/smedim-whatsapp-chatbot.webp',
        url: 'https://smedim.barcasoft.com'
    },
    {
        title: 'SMSBot',
        description: 'O SMSBot é um disparador de SMS, seja para autenticação de aplicações ou marketing digital. Criado com React e Next com Material UI para agilizar o processo de criação do front-end. Node e Express para criar a API. A aplicação envia respostas automáticas pré definidas e respostas através do dashboard, no qual da pra ver as respostas dos contatos. O cliente que solicitou a criação da aplicação disponibilizou uma VPS na qual configurei com NGINX, Letsencrypt e Docker.',
        image: '/assets/images/projects/smsbot.webp',
        url: 'https://app.smsbot.chat'
    },
    {
        title: 'GTISS',
        description: 'O GTISS é um projeto pessoal. Ele gera XML no padrão TISS definido pela a ANS (Agência Nacional de Saúde) no qual as clínicas enviam para as operadoras de saúde (planos de saúde) para poderem faturar os exames, consultas e atendimentos. O sistema foi criado com React e Next e back-end com Node e Express. O sistema está hospedado em uma hospedagem minha própria, que eu configurei com NGINX, LetsEncrypt e Docker.',
        image: '/assets/images/projects/gtiss.webp',
        url: 'https://gtiss.com'
    },
];

export default projectsList;