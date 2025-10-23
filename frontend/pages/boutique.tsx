import Image from "next/image";

import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

const products = [
  {
    id: "maintenance-premium",
    name: "Maintenance Premium",
    description: "Mises à jour proactives, supervision 24/7, rapports mensuels et interventions illimitées.",
    price: "249 CHF / mois"
  },
  {
    id: "pack-ecommerce",
    name: "Pack E-commerce",
    description: "Création complète d’une boutique en ligne, tunnel d’achat optimisé et intégration logistique.",
    price: "4 990 CHF"
  },
  {
    id: "audit-performance",
    name: "Audit de performance",
    description: "Analyse technique, recommandations SEO/SEA et plan d’optimisation détaillé.",
    price: "1 290 CHF"
  }
];

export default function BoutiquePage() {
  return (
    <Layout
      title="Boutique • Rusard.ch"
      description="Accédez aux offres Rusard : maintenance, e-commerce, audits et services digitaux à la demande."
    >
      <PageHeader
        overline="Boutique"
        title="Sélectionnez l’offre qui accélère votre projet"
        description="Des packs prêts à l’emploi pour sécuriser vos applications, lancer votre e-commerce ou booster vos performances."
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="relative mb-6 h-40 w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={`https://picsum.photos/seed/${product.id}/400/300`}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h2 className="text-lg font-semibold text-primary-700">{product.name}</h2>
              <p className="mt-3 flex-1 text-sm text-slate-600">{product.description}</p>
              <p className="mt-6 text-base font-semibold text-slate-900">{product.price}</p>
              <button className="mt-6 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700">
                Ajouter au panier
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-primary-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Besoin d’un accompagnement personnalisé ?
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Contactez-nous pour bâtir une offre sur mesure répondant à vos enjeux techniques, marketing ou
            organisationnels.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </Layout>
  );
}
