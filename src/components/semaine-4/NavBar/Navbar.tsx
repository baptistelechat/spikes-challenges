import { ListFilter, Search, ShoppingCart } from "lucide-react";
import Logo from "./components/Logo";
import PagesLink from "./components/PagesLink";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-between border-b border-zinc-300 px-10 py-6">
      <Logo />
      <PagesLink />
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
