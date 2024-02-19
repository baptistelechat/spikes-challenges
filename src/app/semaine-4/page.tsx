import GoHomeButton from "@/components/GoHomeButton";
import AddToCart from "@/components/semaine-4/AddToCart";
import AddToWishlist from "@/components/semaine-4/AddToWishlist";
import Amount from "@/components/semaine-4/Amount";
import Ariane from "@/components/semaine-4/Ariane";
import Color from "@/components/semaine-4/Color";
import Navbar from "@/components/semaine-4/Navbar";
import Review from "@/components/semaine-4/Review";
import Social from "@/components/semaine-4/Social";
import Title from "@/components/semaine-4/Title";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge Web | Semaine 4",
  description: "Challenge web of fourth week",
};

const Page = () => (
  <div className="flex h-screen flex-col">
    <Navbar />
    <div className="flex grow">
      <div className="flex w-1/2 flex-col justify-between p-12">
        <div className="flex flex-col gap-2">
          <Button variant="outline" size="icon" className="border-transparent">
            <MoveLeft className="size-6" />
          </Button>
          <Ariane />
        </div>
        <div className="flex flex-col gap-4">
          <Title />
          <div className="flex items-center gap-32">
            <Amount />
            <Review />
          </div>
          <p>
            The gently curved lines accentuated by sewn details are kind to your
            body and pleasant to look at. Also, there’s a tilt and
            height-adjusting mechanism that’s built to outlast years of ups and
            downs.
          </p>
          <Color />
        </div>
        <AddToCart />
        <div className="flex flex-col gap-2">
          <p>Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>
          <div className="flex items-center justify-between">
            <AddToWishlist />
            <Social />
          </div>
        </div>
      </div>
      <div className="grow bg-indigo-500">test2</div>
    </div>
    <GoHomeButton theme="dark" />
  </div>
);

export default Page;
