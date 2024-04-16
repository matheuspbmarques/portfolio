//Images
import valeLocacoes from '../assets/vale-locacoes.png'
import interlock from '../assets/interlock.png'
import qShopp from '../assets/qshopp.png'

//Props
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { UrlObject } from 'url'
interface ProjectsListProps{
    image: string | StaticImport,
    title: string,
    description: string,
    url: string | UrlObject
}

const projectsList:Array<ProjectsListProps> = [
    {
        image: valeLocacoes,
        title: 'Vale Locações',
        description: 'Site responsível para apresentação Desenvolvido em HTML, CSS e JavaScript',
        url: 'https://www.valelocacoes.com'
    },
    {
        image: interlock,
        title: 'Interlock',
        description: 'Site responsível para apresentação Desenvolvido em HTML, CSS, JavaScript e PHP',
        url: 'https://www.interlockeng.com'
    },
    {
        image: qShopp,
        title: 'qShopp',
        description: 'Site de controle de vendas, feito em React + Next no front-end, com Node + Express no back-end. O front-end updado na Vercel e o bakc-end no Heroku. Antes, para fins de aprendizado, coloquei o back-end na AWS, usando EC2, Route53, Loud Balance, entre outros serviços da AWS.',
        url: 'https://www.qshopp.com.br'
    }
]

export default projectsList