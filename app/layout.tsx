import type { Metadata } from "next";
import "./globals.css";
import { NavBar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars at the best prices. Just for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
