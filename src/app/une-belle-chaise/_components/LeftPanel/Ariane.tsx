import useThemeStore from "@/lib/store/une-belle-chaise/themeStore";

const Ariane = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <div className="flex gap-2">
      <p className="font-semibold" style={{color:theme}}>Chair</p>
      <p className="font-semibold text-slate-900">/</p>
      <p className="font-semibold text-slate-900">Meryl Lounge Chair</p>
    </div>
  );
};

export default Ariane;
