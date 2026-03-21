import socialMediaList from "@/configs/socialMediaList";
import Link from "next/link";
import Icons from "../ui/Icons";

type ContactProps = {
  id?: string;
};

export default function Contact({ id }: ContactProps) {
  const renderSocialMedia = socialMediaList.map(({ icon, url }, index) => {
    return (
      <li key={index}>
        <Link href={url}>
          <span className="fill-slate-100">
            <Icons name={icon} />
          </span>
        </Link>
      </li>
    );
  });

  return (
    <footer id={id} className="bg-slate-800">
      <div className="mx-auto flex flex-col px-6 py-8 max-w-5xl">
        <ul className="flex flex-col justify-center gap-1 mt-4">
          <li className="text-center">+55 (91) 99314-0809</li>
          <li className="text-center">matheuspbmarques@protonmail.com</li>
        </ul>
        <ul className="mt-4 flex gap-4 justify-center">{renderSocialMedia}</ul>
      </div>
    </footer>
  );
}
