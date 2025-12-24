"use client";

//Components
import Header from "@/app/_components/Header";
import { Main } from "./_components/Main";
import { Experiences } from "./_components/sections/experiences/Experiences";

export default function Home() {
  return (
    <body className={`bg-primary text-foreground`}>
      <Header />
      <Main />
      <Experiences />
    </body>
  );
}
