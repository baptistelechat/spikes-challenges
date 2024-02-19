import { ListFilter, Search, ShoppingCart } from "lucide-react";
import { Button } from "../../ui/button";

const Navbar = () => {
  const pages = ["Shop", "Collective", "Designers", "About Us", "Contact"];

  return (
    <div className="flex h-20 w-full items-center justify-between border-b border-zinc-300 px-10 py-6">
      <p className="text-2xl font-extrabold">Cozy®</p>
      <div className="flex gap-4 ">
        {pages.map((page) => (
          <Button key={page} variant="link" className="font-semibold">
            {page.toUpperCase()}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="border-transparent">
            <ListFilter className="size-6" />
          </Button>
          <Button variant="outline" size="icon" className="border-transparent">
            <Search className="size-6" />
          </Button>
        </div>
        <div className="h-20 border-l border-zinc-300"></div>
        <Button variant="outline" size="icon" className="border-transparent">
          <ShoppingCart className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
