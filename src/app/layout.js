import { Inter } from "next/font/google";
import "./globals.css";
// import PageTransition from "@/utils/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <PageTransition> */}
          {children}
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
