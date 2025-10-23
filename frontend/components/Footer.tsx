export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Rusard. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="/mentions-legales" className="hover:text-primary-600">
            Mentions légales
          </a>
          <a href="/politique-de-confidentialite" className="hover:text-primary-600">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
