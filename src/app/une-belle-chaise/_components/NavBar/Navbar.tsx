import Cart from "./components/Cart";
import Icons from "./components/Icons";
import Logo from "./components/Logo";
import PagesLink from "./components/PagesLink";
import Wishlist from "./components/Whishlist";

const Navbar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-between border-b border-zinc-300 px-10 py-6">
      <Logo />
      <PagesLink />
      <div className="flex items-center gap-10">
        <Icons />
        <div className="h-20 border-l border-zinc-300"></div>
        <Wishlist/>
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
