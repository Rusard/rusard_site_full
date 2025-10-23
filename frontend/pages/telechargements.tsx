import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

const resources = [
  {
    title: "Catalogue Rusard 2025",
    description: "Découvrez notre offre complète de services digitaux avec études de cas et tarifs indicatifs.",
    size: "PDF · 12 Mo"
  },
  {
    title: "Checklist lancement e-commerce",
    description: "Les 25 points clés pour ouvrir une boutique en ligne performante et conforme aux normes suisses.",
    size: "PDF · 4 Mo"
  },
  {
    title: "Guide sécurité applicative",
    description: "Bonnes pratiques DevSecOps pour protéger vos applications web et vos données clients.",
    size: "PDF · 6 Mo"
  }
];

export default function TelechargementsPage() {
  return (
    <Layout
      title="Téléchargements • Rusard.ch"
      description="Accédez aux ressources gratuites de Rusard : catalogues, guides et checklists pour vos projets digitaux."
    >
      <PageHeader
        overline="Ressources"
        title="Téléchargez nos guides et catalogues exclusifs"
        description="Des ressources pratiques pour prendre des décisions éclairées et accélérer votre transformation digitale."
      />
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="space-y-6">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{resource.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-primary-500">
                  {resource.size}
                </span>
                <button className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700">
                  Télécharger
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
