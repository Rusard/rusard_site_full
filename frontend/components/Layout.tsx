import Head from "next/head";
import { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export function Layout({
  children,
  title = "Rusard.ch – Solutions numériques sur mesure",
  description = "Accompagnement digital complet : développement web, e-commerce, maintenance et hébergement sécurisés."
}: LayoutProps) {
  const metaTitle = title;
  const metaDescription = description;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
