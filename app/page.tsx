'use client'

//Components
import Header from "@/components/sections/Header"

//Configs
import sectionsList from "@/configs/sectionsList"

export default function Home(){

  const renderSections = sectionsList.map((section, i) => {
    if(section.sectionComponent!){
      return(
        <section.sectionComponent key={i} id={section.sectionId} />
      )
    }
  })

  return (
    <>
      <Header />
      { renderSections }
    </>
  )
}
