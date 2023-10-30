//Images
import valeLocacoes from '../assets/vale-locacoes.png'
import interlock from '../assets/interlock.png'

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
    }
]

export default projectsList