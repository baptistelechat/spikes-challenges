import { Button } from "../ui/button";

const Menu = () => (
  <div className="flex h-16 w-full items-center justify-between rounded-2xl bg-gray-900/30 p-4 backdrop-blur-xl">
    <div>Logo</div>
    <div className="flex gap-4 ">
      <Button variant="link" className="font-thin text-white">
        Features
      </Button>
      <Button variant="link" className="font-thin text-white">
        Pricing
      </Button>
      <Button variant="link" className="font-thin text-white">
        About Us
      </Button>
    </div>
    <Button variant="secondary" className="rounded-full">
      Download the app
    </Button>
  </div>
);

export default Menu;
