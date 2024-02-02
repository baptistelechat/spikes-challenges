import GradientHeading from "@/components/GradientHeading";
import Link from "next/link";

export default function Home() {
  const currentWeek = 1; // Remplace cela par la semaine actuelle ou dynamiquement récupérée

  // Générer les liens et titres dynamiquement
  const links = Array.from({ length: currentWeek + 3 }, (_, index) => ({
    href: `/semaine-${index + 1}`,
    text: `Semaine ${index + 1}`,
    disabled: index + 1 > currentWeek,
  }));

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-2 backdrop-blur bg-blue-100">
      <GradientHeading
        heading={1}
        title="Challenge web"
        from="from-sky-400"
        to="to-indigo-700"
      />
      <div className="w-1/2 flex flex-wrap justify-center gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={!link.disabled ? link.href : ""}
            className={`w-fit p-3 rounded ${
              !link.disabled
                ? "bg-sky-300 hover:underline hover:text-white hover:-rotate-6 hover:scale-105 transition-all duration-300 ease-in-out"
                : "bg-gray-100 cursor-not-allowed"
            } `}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <p className="w-full italic p-2 text-center">Baptiste LECHAT</p>
    </main>
  );
}
