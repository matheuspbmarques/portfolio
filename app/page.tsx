'use client'

//Components
import Header from "@/app/_components/Header"
import { Main } from "./_components/Main"

export default function Home(){
  return (
    <body className={`bg-primary text-foreground`}>
      <Header />
      <Main />
    </body>
  )
}
