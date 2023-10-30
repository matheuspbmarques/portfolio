//Props
import type { NamesTypes } from "@/components/Icons"
import type { UrlObject } from "url"
interface SocialmediaListProps{
    url: string | UrlObject,
    icon: NamesTypes
}

const socialMediaList:Array<SocialmediaListProps> = [
    {
        icon: 'github',
        url: 'https://github.com/matheuspbmarques'
    },
    {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/in/matheus-marques-b39880154/'
    }
]

export default socialMediaList