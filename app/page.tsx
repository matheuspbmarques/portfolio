"use client";

//Components
import Header from "@/app/_components/Header";
import { Main } from "./_components/Main";
import { Experiences } from "./_components/sessions/experiences/Experiences";
import { Projects } from "./_components/sessions/projects/Projects";
import { Tecnologies } from "./_components/sessions/tecnologies/Tecnologies";

export default function Home() {
  return (
    <body className={`bg-primary text-foreground`}>
      <Header />
      <Main />
      <Experiences />
      <Projects />
      <Tecnologies />
    </body>
  );
}
