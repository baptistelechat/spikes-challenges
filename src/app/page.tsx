import GradientHeading from "@/components/GradientHeading";
import Link from "next/link";

const Page = () => {
  const currentWeek = 2; // Remplace cela par la semaine actuelle ou dynamiquement récupérée

  // Générer les liens et titres dynamiquement
  const links = Array.from({ length: currentWeek + 3 }, (_, index) => ({
    href:
      index + 1 === 2
        ? "https://baptistelechat.vercel.app/"
        : `/semaine-${index + 1}`,
    text: `Semaine ${index + 1}`,
    disabled: index + 1 > currentWeek,
  }));

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-2 bg-blue-100 backdrop-blur">
      <GradientHeading
        heading={1}
        title="Challenge web"
        from="from-sky-400"
        to="to-indigo-700"
      />
      <div className="flex w-1/2 flex-wrap justify-center gap-2">
        {links.map((link) => (
          <Link
            key={link.href.replace("/", "")}
            href={!link.disabled ? link.href : "/"}
            className={`w-fit rounded p-3 ${
              !link.disabled
                ? "bg-sky-300 transition-all duration-300 ease-in-out hover:-rotate-6 hover:scale-105 hover:text-white hover:underline"
                : "cursor-not-allowed bg-gray-100"
            } `}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <p className="w-full p-2 text-center italic">Baptiste LECHAT</p>
    </main>
  );
};

export default Page;
