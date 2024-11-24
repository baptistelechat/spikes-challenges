import { delaGothicOne } from "@/lib/constants/fonts";
import Input from "../Input";

const CTA = () => {
  return (
    <div className="my-16 flex w-full flex-col items-center justify-center space-y-7 rounded-3xl bg-white px-7 py-14 md:w-2/3">
      <p className={`${delaGothicOne.className} text-center text-3xl`}>
        Be the first to know about new features,
        <br />
        special offers, and more.
      </p>
      <div className="w-2/3">
        <Input
          placeholder="Your best email address"
          action="Join waitlist"
          sendAction="Register"
        />
      </div>
    </div>
  );
};

export default CTA;
