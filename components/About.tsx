'use client'

//Next
import Image from "next/image"

//Configs
import fonts from "@/configs/fonts"

//Assets
import myPhoto from '../assets/IMG_20220414_133959_211.jpeg'

//Props
interface AboutProps{
    id?: string
}

export default function About({ id }:AboutProps){
    return(
        <section id={id} className="flex gap-2 px-6 py-8 sm:gap-8 items-center max-w-3xl mx-auto">
            <div className="flex-1 flex flex-col gap-8">
                <h2 className={`${fonts.kanitText.className} text-slate-100 text-2xl sm:text-3xl`}>Olá, me chamo Matheus, sou dev {`<FullStack />`}</h2>
                <a href="matheus-marques-curriculo.pdf" download className={`p-2 rounded-lg custom-gradient w-max ${fonts.kanitText.className} text-slate-100`}>
                    Baixar Currículo
                </a>
            </div>
            <div>
                <div className="flex w-[160px] h-[160px] overflow-hidden rounded-full items-center justify-center sm:w-[200px] sm:h-[200px]">
                    <Image alt="Minha foto" src={myPhoto} />;
                </div>
            </div>
        </section>
    )
}