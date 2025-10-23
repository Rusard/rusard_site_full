import { FormEvent, useState } from "react";

import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { contactDetails } from "@/lib/data/site";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    // Placeholder: send to backend API when ready
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
  };

  return (
    <Layout
      title="Contact • Rusard.ch"
      description="Discutons de vos besoins digitaux et imaginons ensemble la prochaine étape de votre croissance."
    >
      <PageHeader
        overline="Contact"
        title="Parlons de votre projet"
        description="Décrivez-nous vos objectifs, nous revenons vers vous sous 24h ouvrées avec un plan d’action personnalisé."
      />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Nom et prénom
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              placeholder="Jean Dupont"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              placeholder="vous@entreprise.ch"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700">
              Nom de l’entreprise
            </label>
            <input
              id="company"
              name="company"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              placeholder="Entreprise SA"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Détaillez votre projet
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              placeholder="Présentez vos objectifs, votre contexte, votre budget estimé..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700 disabled:opacity-60"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading"
              ? "Envoi en cours..."
              : status === "success"
              ? "Message envoyé !"
              : "Envoyer le message"}
          </button>
          {status === "error" ? (
            <p className="text-sm text-red-600">
              Une erreur est survenue. Merci de réessayer ou de nous écrire sur contact@rusard.ch.
            </p>
          ) : null}
          {status === "success" ? (
            <p className="text-sm text-primary-600">Merci ! Nous revenons vers vous très vite.</p>
          ) : null}
        </form>
        <aside className="space-y-6 rounded-3xl border border-primary-100 bg-primary-50 p-8 text-sm text-slate-700">
          <div>
            <h2 className="text-base font-semibold text-primary-700">Coordonnées</h2>
            <p className="mt-2">{contactDetails.email}</p>
            <p>{contactDetails.phone}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-primary-700">Adresse</h2>
            <p className="mt-2">{contactDetails.address}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-primary-700">Disponibilité</h2>
            <p className="mt-2">{contactDetails.availability}</p>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
