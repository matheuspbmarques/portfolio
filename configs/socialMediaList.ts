import type { NamesTypes } from "@/components/ui/Icons";
import { ME } from "@/constants";
import type { UrlObject } from "url";

interface SocialmediaListProps {
  url: string | UrlObject;
  icon: NamesTypes;
}

const socialMediaList: Array<SocialmediaListProps> = [
  {
    icon: "whatsapp",
    url: ME.WHATSAPP,
  },
  {
    icon: "telegram",
    url: ME.TELEGRAM,
  },
  {
    icon: "github",
    url: ME.GITHUB,
  },
  {
    icon: "linkedin",
    url: ME.LINKEDIN,
  },
];

export default socialMediaList;
