import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Bank",
  description: "Digital Bank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${publicSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
