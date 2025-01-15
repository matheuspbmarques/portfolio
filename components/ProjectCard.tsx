import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";
import fonts from "@/configs/fonts"
import { UrlObject } from "url"

interface ProjectCardProps{
    image: string | StaticImport,
    title: string,
    description: string,
    access: string | UrlObject
}

export default function ProjectCard({
    image,
    title,
    description,
    access
}:ProjectCardProps){
    return(
        <div className="w-full custom-gradient rounded-2xl p-[2px]">
            <div className="w-full h-full bg-slate-800 rounded-[14px] p-4 flex flex-col gap-4 sm:flex-row md:flex-col">

                {/**Image */}
                <div className="w-full rounded-lg overflow-hidden sm:flex-1">
                    <Image src={image} alt="Imagem do projeto" width={1024} height={768} />
                </div>{/**Image */}

                <div className="flex flex-col gap-4 sm:flex-1">
                    {/**Info */}
                    <div className="flex flex-col gap-2 sm:flex-1">
                        <h3 className={`${fonts.kanitSmallTitle.className} text-base text-slate-100`}>{ title }</h3>
                        <p className={`${fonts.kanitText.className} text-sm text-slate-100`}>{ description }</p>
                    </div>{/**Info */}

                    <Link href={access} target="_black" className={`${fonts.kanitText.className} text-sm text-slate-100 p-2 rounded-lg text-center custom-gradient`}>Acessar</Link>
                </div>

            </div>
        </div>
    )
}