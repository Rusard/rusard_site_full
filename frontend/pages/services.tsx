import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { services } from "@/lib/data/site";

const expertise = [
  {
    title: "Stratégie digitale",
    description:
      "Ateliers d’idéation, cadrage, étude de persona et roadmap produit pour aligner vos objectifs business et techniques."
  },
  {
    title: "Architecture & développement",
    description:
      "Applications modulaires construites avec Next.js, NestJS et des services cloud sécurisés, pensées pour l’évolutivité."
  },
  {
    title: "Intégrations & automatisation",
    description:
      "Connecteurs ERP/CRM, automatisation marketing et API sécurisées pour fluidifier vos opérations."
  },
  {
    title: "Accompagnement long terme",
    description:
      "Maintenance applicative, monitoring, plans d’amélioration continue et support multi-canal."
  }
];

export default function ServicesPage() {
  return (
    <Layout title="Services • Rusard.ch" description="Découvrez l’accompagnement digital complet de Rusard.">
      <PageHeader
        overline="Expertise"
        title="Des services sur mesure pour votre transformation digitale"
        description="De la stratégie à la maintenance, nous co-construisons des solutions adaptées à vos enjeux métiers."
      />
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-primary-700">{service.title}</h2>
              <p className="mt-4 text-sm text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-2">
          {expertise.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
