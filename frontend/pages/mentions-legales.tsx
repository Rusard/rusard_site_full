import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

export default function MentionsLegalesPage() {
  return (
    <Layout
      title="Mentions légales • Rusard.ch"
      description="Informations légales et coordonnées de Rusard, éditrice du site rusard.ch."
    >
      <PageHeader
        overline="Mentions légales"
        title="Informations légales de l’éditeur"
        description="Ces informations sont fournies en conformité avec la législation suisse et le RGPD."
      />
      <section className="mx-auto max-w-4xl space-y-10 px-6 pb-16 text-sm text-slate-600">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Éditeur du site</h2>
          <p className="mt-2">
            Rusard SA<br />
            Rue du Rhône 118<br />
            1204 Genève, Suisse<br />
            IDE / TVA : CHE-000.000.000
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">Hébergement</h2>
          <p className="mt-2">
            Infrastructure cloud hébergée en Suisse chez Infomaniak Network SA, 1227 Genève.<br />
            Serveurs redondés en datacenters certifiés ISO 27001.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des éléments graphiques, textes, vidéos et photos présentés sur ce site sont la
            propriété exclusive de Rusard SA ou de ses partenaires. Toute reproduction totale ou partielle est
            soumise à autorisation préalable.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">Responsabilité</h2>
          <p className="mt-2">
            Rusard SA met tout en œuvre pour assurer l&apos;exactitude et la mise à jour des informations
            diffusées. Toutefois, la responsabilité de l&apos;éditeur ne saurait être engagée pour des dommages
            résultant d&apos;une mauvaise utilisation du site ou d&apos;erreurs éventuelles.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Email : contact@rusard.ch<br />
            Téléphone : +41 22 000 00 00
          </p>
        </div>
      </section>
    </Layout>
  );
}
