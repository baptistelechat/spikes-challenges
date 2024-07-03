import { delaGothicOne } from "@/lib/constants/fonts";
import Input from "../Input";

const CTA = () => {
  return (
    <div className="my-16 flex w-2/3 flex-col items-center justify-center space-y-7 rounded-3xl bg-white px-7 py-14">
      <p className={`${delaGothicOne.className} text-center text-3xl`}>
        Be the first to know about new features,
        <br />
        special offers, and more.
      </p>
      <div className="w-3/4">
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
