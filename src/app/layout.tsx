import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Guia Documental | Assessoria para Passaporte Brasileiro",
  description:
    "Assessoria particular para passaporte brasileiro. Orientação completa para primeira via e renovação com checklist personalizado, revisão de dados e acompanhamento. Empresa privada — serviço opcional.",
  authors: [{ name: "Guia Documental" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Guia Documental | Assessoria para Passaporte Brasileiro",
    description:
      "Orientação completa para primeira via e renovação de passaporte. Checklist personalizado e acompanhamento em cada etapa.",
    locale: "pt_BR",
    type: "website",
    url: "https://www.guiadocumental.org",
    siteName: "Guia Documental",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia Documental | Assessoria para Passaporte",
    description:
      "Orientação completa para primeira via e renovação de passaporte brasileiro.",
  },
  alternates: {
    canonical: "https://www.guiadocumental.org",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "theme-color": "#0052a3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Guia Documental",
              description:
                "Consultoria privada especializada em orientação para obtenção de passaporte brasileiro",
              url: "https://www.guiadocumental.org",
              contactType: "assessoria",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Hanuch Salum, 22 - Jardim Laura",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "08142-300",
                addressCountry: "BR",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17945149520"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17945149520');
          `}
        </Script>
      </body>
    </html>
  );
}
