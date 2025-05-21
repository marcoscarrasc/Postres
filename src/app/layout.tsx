import type { Metadata } from "next";

import "./globals.css";




export const metadata: Metadata = {
  title: "Postres Paolita",
  description: "Postres al por mayor y menor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
        {children}
      </body>
    </html>
  );
}
