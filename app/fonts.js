import { Poppins, Rubik, Lilita_One, Caveat } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const lilita_one = Lilita_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const caveat = Caveat({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
