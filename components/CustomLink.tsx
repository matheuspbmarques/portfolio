'use client'

//React
import { useRef } from 'react'

//Next
import Link from "next/link"

//Configs
import fonts from "@/configs/fonts"

interface CustomLinkProps{
    text?: string,
    link?: string,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export default function CustomLink({ text, link, onClick }:CustomLinkProps){
    const lastSpanRef = useRef<HTMLSpanElement>(null)

    return(
        <Link
            href={`#${link}`}
            className={`${fonts.kanitText.className} text-sm text-slate-100 p-2 flex flex-col`}
            onMouseOver={() => {
                lastSpanRef.current!.style.width = '100%'
            }}
            onMouseOut={() => {
                lastSpanRef.current!.style.width = '0'
            }}
            onClick={onClick}
        >
            <span>{ text }</span>
            <span className="w-0 h-[2px] bg-slate-100 duration-300" ref={lastSpanRef} style={{
                boxShadow: '#06B6D4 0px 0px 25px',
                background: 'linear-gradient(90deg, #06B6D4 0%, #9747FF 100%)'
            }} />
        </Link>
    )
}