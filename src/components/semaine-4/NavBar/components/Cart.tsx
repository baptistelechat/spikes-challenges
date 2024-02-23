"use client";
import { MotionBadge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useCartStore from "@/lib/store/semaine-4/cartStore";

import { Variants } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Cart = () => {
  const cart = useCartStore((s) => s.cart);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex flex-col items-center gap-1">
          {/* <Button variant="outline" size="icon" className="border-transparent">
            <ShoppingCart className="size-6" />
          </Button> */}
          <ShoppingCart className="size-6" />
          <MotionBadge
            className="w-8 place-content-center"
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
          >
            {cart}
          </MotionBadge>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  );
};

export default Cart;
