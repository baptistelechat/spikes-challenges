"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/lib/store/une-belle-chaise/cartStore";
import useThemeStore from "@/lib/store/une-belle-chaise/themeStore";
import Chair from "@assets/une-belle-chaise/01.jpeg";
import { Variants, motion } from "framer-motion";
import { Heart, PackageX, Trash } from "lucide-react";
import Image from "next/image";

const wishlistVariants: Variants = {
  hidden: {
    x: 150,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Wishlist = () => {
  const wishlist = useCartStore((s) => s.wishlist);
  const resetWishlist = useCartStore((s) => s.resetWishlist);

  const theme = useThemeStore((s) => s.theme);

  return (
    <HoverCard>
      <HoverCardTrigger>
        <motion.div
          className="flex flex-col items-center gap-1"
          variants={wishlistVariants}
          initial="hidden"
          animate="visible"
        >
          <Heart
            className="size-6"
            fill="black"
            color="black"
            fillOpacity={wishlist ? 1 : 0}
          />
          <Badge className="w-8 place-content-center">{wishlist ? 1 : 0}</Badge>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="mr-2 ">
        {!wishlist ? (
          <div className="flex items-center justify-center gap-4">
            <PackageX className="size-6" />
            <p className="font-semibold">Wishlist is empty</p>
          </div>
        ) : (
          <motion.div
            className="flex flex-col gap-2"
            initial={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="font-semibold">Whishlist</p>
            <Separator />
            <div className="flex flex-col gap-2">
              <Image
                src={Chair}
                alt={"Chair"}
                width={150}
                height={150}
                className={"rounded border-2 object-cover"}
                style={{
                  borderColor: theme,
                }}
                unoptimized
              />
              <div className="flex flex-col gap-2 ">
                <p className="font-semibold text-zinc-400">
                  Meryl Lounge Chair
                </p>

                <Button
                  variant="link"
                  className="flex gap-2"
                  onClick={() => resetWishlist()}
                >
                  <Trash className="size-4" />
                  Empty the wishlist
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default Wishlist;
