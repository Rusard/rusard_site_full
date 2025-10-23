type PageHeaderProps = {
  overline?: string;
  title: string;
  description?: string;
};

export function PageHeader({ overline, title, description }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl px-6 py-16 text-center">
      {overline ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
          {overline}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold text-slate-900">{title}</h1>
      {description ? <p className="mt-6 text-base text-slate-600">{description}</p> : null}
    </header>
  );
}
