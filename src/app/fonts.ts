import { Raleway } from "next/font/google";
import localFont from "next/font/local";

const theBoldFont = localFont({
  src: "fonts/theboldfont.ttf",
  variable: "--font-theboldfont",
  display: "swap",
  weight: "400",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export { theBoldFont, raleway };
