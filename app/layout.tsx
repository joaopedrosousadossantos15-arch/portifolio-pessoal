import type { Metadata } from "next";
import { Great_Vibes, Oswald, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/personal";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personal.name} — Portfólio`,
  description: `${personal.role}. Conheça projetos, habilidades e trajetória.`,
  openGraph: {
    title: `${personal.name} — Portfólio`,
    description: personal.introduction,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Portfólio`,
    description: personal.introduction,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}})();`,
          }}
        />
      </head>
      <body className={`${jakarta.variable} ${mono.variable} ${oswald.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
