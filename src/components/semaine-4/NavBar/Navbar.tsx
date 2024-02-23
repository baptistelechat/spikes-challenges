import { MotionBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Variants } from "framer-motion";
import { ListFilter, Search, ShoppingCart } from "lucide-react";
import Logo from "./components/Logo";
import PagesLink from "./components/PagesLink";

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex flex-col items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                className="border-transparent"
              >
                <ShoppingCart className="size-6" />
              </Button>
              <MotionBadge
                className="w-fit"
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
              >
                1
              </MotionBadge>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            The React Framework – created and maintained by @vercel.
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default Navbar;
