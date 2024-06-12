import { Inter } from "next/font/google";
import SideBar from "./components/SideBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Henrique Biatto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="offwhite">
      <body className={inter.className}>
      <main className="w-screen h-screen overflow-x-hidden">
      <div className="flex h-full px-10 py-12">
        <SideBar />
        <div className="flex flex-col items-end w-full px-20">
          {children}
        </div>
      </div>
      </main>

      </body>
    </html>
  );
}
