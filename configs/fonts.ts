import { Kanit } from "next/font/google";

const kanitText = Kanit({ weight: "200", subsets: ["latin"] });
const kanitSmallTitle = Kanit({ weight: "400", subsets: ["latin"] });

const fonts = {
  kanitText,
  kanitSmallTitle,
};

export default fonts;
