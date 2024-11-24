import { AnimatedTooltip } from "@/app/sell/_components/aceternityUi/animated-tooltip";
import { delaGothicOne } from "@/lib/constants/fonts";
import avatarUrls from "@/lib/constants/sell/avatarUrls";
import Input from "../Input";

const Hero = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-10 sm:w-1/2">
      <div className="w-fit rounded-full bg-gradient-to-r from-red-300 to-indigo-600 px-3 py-1.5 text-center font-semibold text-white">
        Introducing a new online selling platform 🎉
      </div>
      <div className="flex flex-col gap-5">
        <p className={`${delaGothicOne.className} text-center text-5xl`}>
          Best way to sell
          <br />
          your digital product
        </p>
        <p className="text-center text-sm font-medium text-zinc-500">
          Go from Zero to Hero with simple platform that helps
          <br />
          creators like you sell their digital products online.
        </p>
      </div>
      <div className="w-full lg:w-2/3">
        <Input
          placeholder="Your best email address"
          action="Try it out"
          extraStyle="px-12"
          sendAction="Register"
        />
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <div className="flex w-fit items-center justify-center">
          <AnimatedTooltip items={avatarUrls} numPeople="100" />
        </div>
        <p className="text-center text-zinc-500 sm:text-left">
          <span className="font-bold text-black">More than 100+</span> users are
          selling their products
          <br />
          online with simple & easy ways
        </p>
      </div>
    </div>
  );
};

export default Hero;
