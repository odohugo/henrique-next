import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Henrique Biatto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="offwhite">
        <body>
            {children}
        </body>
    </html>
  );
}