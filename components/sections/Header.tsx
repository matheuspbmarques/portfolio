import NavButton from "@/components/ui/NavButton";
import sectionsList from "@/configs/sectionsList";

export default function Header() {
  const renderNavList = sectionsList.map((section, i) => {
    if (section.nameInHeader) {
      return (
        <NavButton
          key={i}
          text={section.nameInHeader}
          link={section.sectionId}
        />
      );
    }
  });

  return (
    <>
      <header className="sticky top-0 bg-slate-900 shadow-slate-900 shadow-lg">
        <nav className="flex gap-2 justify-center p-6">{renderNavList}</nav>
      </header>
    </>
  );
}
