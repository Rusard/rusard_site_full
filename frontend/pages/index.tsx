export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      <h1 className="text-5xl font-bold mb-4">RUSARD.CH</h1>
      <p className="text-lg text-center max-w-2xl">
        Bienvenue sur le site officiel de Rusard. Découvrez nos services, notre boutique, et nos téléchargements exclusifs.
      </p>
      <a href="/boutique" className="mt-6 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
        Accéder à la boutique
      </a>
    </main>
  );
}
