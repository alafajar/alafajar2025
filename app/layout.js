import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitSans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const OvoSans = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Alafajar",
  description: "Make it Frontend Great Again",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${OutfitSans.className} ${OvoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
