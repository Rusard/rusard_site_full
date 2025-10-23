import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

const sections = [
  {
    title: "Collecte des données",
    content:
      "Nous collectons uniquement les données strictement nécessaires au traitement des demandes : identité, coordonnées, informations liées à votre projet. Aucune donnée sensible n’est requise."
  },
  {
    title: "Utilisation",
    content:
      "Les informations sont utilisées pour répondre à vos demandes, préparer des offres commerciales et assurer le suivi de la relation client. Elles ne sont jamais revendues à des tiers."
  },
  {
    title: "Stockage & sécurité",
    content:
      "Les données sont hébergées en Suisse et protégées par des mécanismes de chiffrement, d’authentification multi-facteurs et des sauvegardes régulières."
  },
  {
    title: "Durée de conservation",
    content:
      "Les données prospects sont conservées 24 mois après le dernier échange, sauf obligation légale contraire. Les données clients sont archivées selon les durées légales en vigueur."
  },
  {
    title: "Vos droits",
    content:
      "Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition et d’effacement. Pour exercer vos droits : privacy@rusard.ch."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <Layout
      title="Politique de confidentialité • Rusard.ch"
      description="Informez-vous sur la politique de confidentialité de Rusard et la gestion de vos données personnelles."
    >
      <PageHeader
        overline="Confidentialité"
        title="Protection de vos données personnelles"
        description="Rusard s’engage à respecter votre vie privée et à garantir un haut niveau de sécurité pour vos informations."
      />
      <section className="mx-auto max-w-4xl space-y-8 px-6 pb-16 text-sm text-slate-600">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-base font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-2">{section.content}</p>
          </article>
        ))}
        <article>
          <h2 className="text-base font-semibold text-slate-900">Cookies & analytique</h2>
          <p className="mt-2">
            Nous utilisons un suivi analytique respectueux de la vie privée pour comprendre l’usage du site et
            améliorer nos services. Vous pouvez gérer vos préférences via la bannière de consentement.
          </p>
        </article>
      </section>
    </Layout>
  );
}
