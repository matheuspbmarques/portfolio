import { UrlObject } from 'url';

interface ProjectsListProps{
    image: string,
    title: string,
    description: string,
    url: string | UrlObject
};

const projectsList:Array<ProjectsListProps> = [
    {
        image: '/assets/images/projects/vale-locacoes.webp',
        title: 'Vale Locações',
        description: 'Site responsível para apresentação da empresa Vale Locações. Desenvolvido com HTML, CSS, JavaScript usando a biblioteca Bootstrap.',
        url: 'https://valelocacoes.com'
    },
    // {
    //     image: '/assets/images/projects/interlock.webp',
    //     title: 'Interlock',
    //     description: 'Site responsível para apresentação Desenvolvido em HTML, CSS, JavaScript e PHP',
    //     url: 'https://www.interlockeng.com'
    // },
    // {
    //     image: '/assets/images/projects/qshopp.webp',
    //     title: 'qShopp',
    //     description: 'Site de controle de vendas, feito em React + Next no front-end, com Node + Express no back-end. O front-end updado na Vercel e o bakc-end no Heroku. Antes, para fins de aprendizado, coloquei o back-end na AWS, usando EC2, Route53, Loud Balance, entre outros serviços da AWS.',
    //     url: 'https://www.qshopp.com.br'
    // }
];

export default projectsList;