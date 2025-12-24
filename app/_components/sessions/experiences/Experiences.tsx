import fonts from "@/configs/fonts";
import { SymbolToUp } from "../../SymbolToUp";
import { Experience, ExperienceProps } from "./Experience";

const experiences: Array<ExperienceProps> = [
  {
    company: "HUB XP (Afya - Consultoria - Contrato Temporário)",
    position: "Desenvolvedor FullStack",
    period: {
      start: "05/25",
      end: "10/25",
    },
    description:
      "Atuei no Front-End usando React com NextJS e Back-End usando Serverless Framework para o Lambda, usando TypeScript e JavaScript (em sistemas legados). Usei SQS para comunicação dos microserviços internos, e serviços externos, como o RM e Salesforce. Participei do projeto para unificação de checkout, para que apenas um checkout fosse usado para todos os tipos de vendas, assim como também, adição de regras de negócio para vendas de pós-graduação.",
    tecnologies: [
      "ReactJS",
      "Vite",
      "NextJS",
      "Storybook",
      "Styled",
      "Redux",
      "react-hook-form",
      "NodeJS",
      "Serverless",
      "SQS",
      "Lambda",
      "Middy",
      "Redis",
      "MongoDB",
    ],
  },
  {
    company: "Montreal",
    position: "Desenvolvedor FullStack",
    period: {
      start: "06/24",
      end: "01/25",
    },
    description:
      "Comecei atuando no cliente Santa Casa da Misericórdia do Pará em um projeto já pronto com Front-End em React e React Native, e Back-End com NodeJS com AdonisJS dando suporte, adicionando funcionalidades e corrigindo erros. Posteriormente fui realocado para o cliente SEDUC dando suporte em um projeto com PHP 5.6 com Zend 1.0. Depois fui realocado para um novo projeto no cliente Santa Casa para dar continuidade em um novo projeto usando PHP 8.2 e Laravel e adicionado a um outro projeto do cliente SEDUC para configurar um servidor Linux com Docker, um servidor Linux com GitLab e fazer a integração entre os 2 servidores. Configurei um CI/CD para GitLab de um projeto React com Next, para fazer o deployer no servidor com Linux e Docker que configurei.",
    tecnologies: [
      "ReactJS",
      "Vite",
      "React Native",
      "Style Module",
      "NodeJS",
      "AdonisJS",
      "MongoDB",
      "API",
      "PHP",
      "Zend",
      "Laravel",
      "SVN",
      "Linux",
      "Server",
      "Docker",
      "GitLab",
      "GitRunner",
      "CI/CD",
    ],
  },
  {
    company: "ABSYS",
    position: "Desenvolvedor",
    period: {
      start: "10/21",
      end: "03/24",
    },
    description:
      "Dei início a um projeto de IA de avaliação de imóveis utilizando NodeJS com Express. Implementei cálculo de regressão. Utilizei API Google Maps para pegar a geolocalização de hospitais, padarias, shoppings, entre outros, próximo a cada imóvel para melhorar o resultado. Também criei um converso de Latitude e Longitude para UTM e visse versa, para utilizar o UTM no cálculo. Fui realocado para dar continuidade em uma API feita em NodeJS para um aplicativo de marketing place feito em Flutter. Fiz integração com o gateway de pagamento Safe2Pay, configuração de serviços da AWS como EC2, S3, Route53, entre outros.",
    tecnologies: [
      "ReactJS",
      "Vite",
      "React Native",
      "Style Module",
      "NodeJS",
      "AdonisJS",
      "MongoDB",
      "API",
      "PHP",
      "Zend",
      "Laravel",
      "SVN",
      "Linux",
      "Server",
      "Docker",
      "GitLab",
      "GitRunner",
      "CI/CD",
    ],
  },
];

export function Experiences() {
  const renderExperiences = experiences.map((experience, index) => {
    return <Experience key={index} {...experience} isFirst={index === 0} />;
  });

  return (
    <section className="py-16 bg-secundary flex flex-col gap-4">
      <div className="relative">
        <h2 className={`text-5xl ${fonts.baiJamjuree[600]} px-8 text-right`}>
          Minhas Experiências
        </h2>
        <span className="absolute -left-16 -top-24">
          <SymbolToUp />
        </span>
      </div>
      {renderExperiences}
    </section>
  );
}
