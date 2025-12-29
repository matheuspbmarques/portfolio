import fonts from "@/configs/fonts";
import { SymbolToRight } from "../../SymbolToRight";

export function ContactMe() {
  return (
    <section className="py-16 flex flex-col gap-8">
      <div className="relative">
        <h2 className={`${fonts.baiJamjuree[700]} text-5xl px-8`}>
          Contate-me
        </h2>
        <span className="absolute -right-[64px] -top-[96px]">
          <SymbolToRight />
        </span>
      </div>
    </section>
  );
}
