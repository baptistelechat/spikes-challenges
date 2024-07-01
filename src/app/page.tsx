import GradientHeading from "@/components/GradientHeading";
import links from "@/lib/constants/links";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-2 bg-blue-100 backdrop-blur">
      <GradientHeading
        heading={1}
        title="Spikes"
        from="from-sky-400"
        to="to-indigo-700"
      />
      <div className="flex w-1/2 flex-wrap justify-center gap-2">
        {links.map((link) => (
          <Link
            key={link.href.replace("/", "")}
            href={link.href}
            className="w-fit rounded bg-sky-300 p-3 transition-all duration-300 ease-in-out hover:-rotate-6 hover:scale-105 hover:text-white hover:underline"
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
