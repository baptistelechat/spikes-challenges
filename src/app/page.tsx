import Link from "next/link";

export default function Home() {
  // Générer les liens et titres dynamiquement
  const links = Array.from({ length: 20 }, (_, index) => ({
    href: `/semaine-${index + 1}`,
    text: `Semaine ${index + 1}`,
  }));

  return (
    <main className="w-full flex flex-col p-3 gap-2">
      <h1 className="text-2xl font-bold underline">Challenge Web</h1>
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="w-fit p-3 rounded bg-blue-50 hover:underline hover:text-blue-500 hover:font-bold"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <p className="w-full italic p-2 text-right">Baptiste LECHAT</p>
    </main>
  );
}
