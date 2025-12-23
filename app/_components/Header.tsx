"use client";

//Components
import { Logo } from "./Logo";

//Configs
import { MenuIcon } from "./MenuIcon";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-8 py-6">
        <Logo />
        <button className="p-2">
          <MenuIcon />
        </button>
      </header>
    </>
  );
}
