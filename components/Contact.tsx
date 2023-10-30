'use client'

import { useState } from 'react'

//Next
import Image from 'next/image'
import Link from 'next/link'

//Components
import CustomInput from './CustomInput'
import CustomTextArea from './CustomTextArea'

//Configs
import fonts from '@/configs/fonts'

//Assets
import mailSvg from '../assets/mail.svg'

//Props
interface ContactProps{
    id?: string
}

export default function Contact({ id }:ContactProps){
    const [subject, setSubject] = useState<string>()
    const [message, setMessage] = useState<string>()

    return(
        <section id={id} className='bg-slate-800'>
            <div className='mx-auto flex flex-col px-6 py-8 gap-4 max-w-3xl'>
                <h2 className={`${fonts.kanitSmallTitle.className} text-slate-100 text-2xl`}>Contate-me</h2>
                <div className='flex gap-8'>
                    <div className='hidden sm:flex flex-1'>
                        <Image alt='Ilustração de e-mail' src={ mailSvg } />
                    </div>
                    <div className={`flex-1 flex flex-col ${fonts.kanitText.className} text-slate-100 gap-2`}>
                        <CustomInput label='Título' placeholder='Informe o título da sua mensagem' id='subject' type='text' onChange={e => setSubject(e.currentTarget.value)} />
                        <CustomTextArea label='Mensagem' placeholder='Deixe a sua mensagem aqui' id='message' onChange={e => setMessage(e.currentTarget.value)} />
                        <Link href={`mailto:matheuspbmarques@hotmail.com?subject=${subject}&body=${message}`} className='custom-gradient rounded-lg p-2 text-center w-full'>Enviar</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}