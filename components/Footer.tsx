'use client'

//Next
import Link from "next/link"

//Components
import Icons from "./Icons"

//Configs
import socialMediaList from "@/configs/socialMediaList"

//Props
interface FooterProps{
    id?: string
}

export default function Footer({ id }:FooterProps){
    const renderSocialMedia = socialMediaList.map((socialMedia, i) => {
        return(
            <Link key={i} href={socialMedia.url}>
                <Icons name={socialMedia.icon} />
            </Link>
        )
    })

    return(
        <section id={id} className="flex justify-center gap-8 py-8">
            { renderSocialMedia }
        </section>
    )
}