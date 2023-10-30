'use client'

//React
import { useState, useRef } from 'react'

//Components
import CustomLink from "@/components/CustomLink"

//Configs
import sectionsList from "@/configs/sectionsList"

export default function Header(){
    const headerRef = useRef<HTMLElement>(null)
    const headerFixedRef = useRef<HTMLElement>(null)

    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)

    if(typeof window !== 'undefined'){
        window.addEventListener('scroll', e => {
            if(headerRef.current){
                if(window.scrollY > headerRef.current.clientHeight){
                    if(lastScrollPosition < window.scrollY){
                        headerFixedRef.current ? headerFixedRef.current.style.top = '0' : undefined
                        setLastScrollPosition(window.scrollY)
                    }else{
                        headerFixedRef.current ? headerFixedRef.current.style.top = '-100%' : undefined
                        setLastScrollPosition(window.scrollY)
                    }
                }else{
                    headerFixedRef.current ? headerFixedRef.current.style.top = '-100%' : undefined
                    setLastScrollPosition(window.scrollY)
                }
            }
        })
    }

    const renderNavList = sectionsList.map((section, i) => {
        if(section.nameInHeader){
            return(
                <CustomLink key={i} text={section.nameInHeader} link={section.sectionId} />
            )
        }
    })

    return(
        <>
            <header ref={ headerRef }>
                <nav className='flex gap-2 justify-center p-6'>
                { renderNavList }
                </nav>
            </header>
            <header className='fixed w-full bg-slate-900 z-10 duration-1000 ease-in-out shadow-md shadow-cyan-600/25 -top-[100%]' ref={headerFixedRef}>
                <nav className='flex gap-2 justify-center p-2'>
                { renderNavList }
                </nav>
            </header>
        </>
    )
}