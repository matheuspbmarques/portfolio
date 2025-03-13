'use client'

//React
import { useState } from 'react'

//Next
import Image from "next/image"

//Configs
import fonts from "@/configs/fonts"
import technologiesList from "@/configs/technologiesList"

//Props
interface TechnologiesProps{
    id?: string
}

export default function Technologies({ id }:TechnologiesProps){
    const renderTechnologies = technologiesList.map((technology, i) => {
        return(
            <li key={i} className={`custom-gradient p-[2px] rounded-lg flex cursor-pointer`}>
                <div className={`h-full flex-1 bg-slate-900 rounded-[6px] ${fonts.kanitText.className} text-slate-100 flex justify-between p-2`}>
                    <span>{ technology }</span>
                </div>
            </li>
        )
    })

    return(
        <section id={id} className="max-w-3xl flex flex-col mx-auto pt-8">
            <h2 className={`${fonts.kanitSmallTitle.className} text-2xl text-slate-100 px-6`}>Tecnologias</h2>
            <ul
                className="flex flex-col gap-2 overflow-hidden px-6 pt-4 pb-8 sm:grid sm:grid-cols-3"
            >
                { renderTechnologies }
            </ul>
        </section>
    )
}