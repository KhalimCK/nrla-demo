import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NRLA Demo App",
  description: "NRLA Demo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col overflow-y-auto`}>
        <div className="flex-grow flex flex-col">{children}</div>
      </body>
    </html>
  );
}
