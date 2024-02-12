import { Button } from "../ui/button";

const Menu = () => (
  <div className="flex h-16 w-full items-center justify-between rounded-2xl bg-gray-900/30 p-4 backdrop-blur-xl">
    <div>Logo</div>
    <div className="flex gap-8 font-thin">
      <div>Features</div>
      <div>Pricing</div>
      <div>About Us</div>
    </div>
    <Button variant="secondary" className="rounded-full">
      Download the app
    </Button>
  </div>
);

export default Menu;
