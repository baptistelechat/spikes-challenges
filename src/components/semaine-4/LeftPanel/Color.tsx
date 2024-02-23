"use client";

import useThemeStore from "@/lib/store/semaine-4/themeStore";

const Color = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  const colorList = ["#C1BDB3", "#58737D", "#545454", "#CBA5A5"];

  return (
    <div className="flex gap-4">
      {colorList.map((color) => (
        <div
          key={color}
          className={`size-5 rounded-full ${theme === color ? "outline outline-2" : "hover:cursor-pointer"} `}
          style={{ backgroundColor: color }}
          onClick={() =>
            setTheme(color as "#C1BDB3" | "#58737D" | "#545454" | "#CBA5A5")
          }
        />
      ))}
    </div>
  );
};

export default Color;
