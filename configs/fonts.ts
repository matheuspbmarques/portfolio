import { Kanit, Bai_Jamjuree } from 'next/font/google'

const kanitText = Kanit({ weight: '400', subsets: ['latin'] })
const kanitSmallTitle = Kanit({ weight: '700', subsets: ['latin'] })

const baiJamjuree200 = Bai_Jamjuree({ weight: "200", subsets: ["latin"] });
const baiJamjuree300 = Bai_Jamjuree({ weight: "300", subsets: ["latin"] });
const baiJamjuree400 = Bai_Jamjuree({ weight: "400", subsets: ["latin"] });
const baiJamjuree500 = Bai_Jamjuree({ weight: "500", subsets: ["latin"] });
const baiJamjuree600 = Bai_Jamjuree({ weight: "600", subsets: ["latin"] });
const baiJamjuree700 = Bai_Jamjuree({ weight: "700", subsets: ["latin"] });

const baiJamjuree = {
  200: baiJamjuree200.className,
  300: baiJamjuree300.className,
  400: baiJamjuree400.className,
  500: baiJamjuree500.className,
  600: baiJamjuree600.className,
  700: baiJamjuree700.className,
};

const fonts = {
    kanitText,
    kanitSmallTitle,
    baiJamjuree
}

export default fonts