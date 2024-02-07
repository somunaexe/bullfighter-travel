import type { Metadata }  from "next";
import  { Nunito }  from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";

const font = Nunito(
  { subsets: ["latin"] }
);

export const metadata: Metadata = {
  title: "Bullfighter Travel",
  description: "Bullfighter travel app for booking holidays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
