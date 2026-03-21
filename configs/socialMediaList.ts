import type { NamesTypes } from "@/components/ui/Icons";
import { ME } from "@/constants";
import type { UrlObject } from "url";

interface SocialmediaListProps {
  url: string | UrlObject;
  icon: NamesTypes;
}

const socialMediaList: Array<SocialmediaListProps> = [
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
