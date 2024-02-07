import type { Metadata }  from "next";
import  { Nunito }  from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Modals/Modals";

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
          <Modal isOpen />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
