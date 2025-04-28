import { Metadata } from "next";
import { Manrope } from "next/font/google";
import React from "react";
import "./globals.css";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "CarService",
  description: "Автосервис в Новосибирске",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="ru">
      <head>
        <link rel="shortcut icon" href="/logo.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={`${manropeSans.variable}`}>
        <main className="main">
          <div className="container">{children}</div>
        </main>
        <div id="modals"></div>
      </body>
    </html>
  );
}
