import fonts from "@/configs/fonts";
import { SymbolToDown } from "./SymbolToDown";

export function Main() {
  return (
    <main className="pt-10 pb-16 overflow-hidden">
      <div className="relative">
        <h1 className={`${fonts.baiJamjuree[600]} text-5xl px-8`}>
          Matheus Marques
        </h1>
        <span className="absolute right top-0 -right-[64px]">
          <SymbolToDown />
        </span>
      </div>
      <p className={`text-2xl mt-4 px-8`}>
        Trabalho com TI a 7 anos, sendo 4 anos como Desenvolvedor.
      </p>
    </main>
  );
}
