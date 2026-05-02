import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
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
              telephone: "+55-31-3779-3600",
              email: "contato@guiadocumental.org",
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
