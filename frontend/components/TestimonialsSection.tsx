import { testimonials } from "@/lib/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold text-slate-900">
            Ils nous font confiance pour accélérer leur transformation digitale
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="text-sm font-medium text-primary-700">
                {testimonial.name} · {testimonial.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
