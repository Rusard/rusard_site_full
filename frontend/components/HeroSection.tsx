import Link from "next/link";

import { hero } from "@/lib/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-wide text-white/80 ring-1 ring-white/20">
            Excellence digitale suisse
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {hero.heading}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">{hero.subheading}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={hero.ctaPrimary.href}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative rounded-3xl bg-white/10 p-8 shadow-xl shadow-primary-900/40 backdrop-blur">
            <div className="flex flex-wrap gap-6">
              <div className="flex min-w-[140px] flex-1 flex-col rounded-2xl bg-white/10 p-4">
                <span className="text-4xl font-bold">24/7</span>
                <span className="text-sm text-white/70">Surveillance applicative</span>
              </div>
              <div className="flex min-w-[140px] flex-1 flex-col rounded-2xl bg-white/10 p-4">
                <span className="text-4xl font-bold">99.9%</span>
                <span className="text-sm text-white/70">Disponibilité garantie</span>
              </div>
              <div className="flex min-w-[140px] flex-1 flex-col rounded-2xl bg-white/10 p-4">
                <span className="text-4xl font-bold">+150</span>
                <span className="text-sm text-white/70">Projets accompagnés</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
