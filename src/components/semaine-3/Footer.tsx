import Image from "next/image";
import Logo from "../../assets/semaine-2/logo.png";

const Footer = () => (
  <div className="flex w-3/4">
    <div className="flex w-1/2 flex-col gap-10">
      <div className="flex flex-col">
        <p className="text-3xl text-white">Contact</p>
        <p className="font-thin text-white">
          Work inquires: work@vaultflow.com
        </p>
        <p className="font-thin text-white">
          PR and speaking: press@vaultflow.com
        </p>
        <p className="font-thin text-white">
          New business: newbusiness@vaultflow.com
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-3xl text-white">Careers</p>
        <p className="font-thin text-white">Careers@vaultflow.com</p>
      </div>
      <p className="text-slate-500">© 2023 Vaultflow. All Rights Reserved.</p>
    </div>
    <div className="flex w-1/2 flex-col gap-10">
      <div className="flex flex-col">
        <p className="text-3xl text-white">Address</p>
        <p className="font-thin text-white">398 11th Street, Floor 2</p>
        <p className="font-thin text-white">San Francisco, CA 94103</p>
      </div>
      <div className="flex flex-col">
        <p className="text-3xl text-white">Social</p>
        <p className="font-thin text-white">Twitter</p>
        <p className="font-thin text-white">Instagram</p>
        <p className="font-thin text-white">Tik Tok</p>
      </div>
      <div className="flex w-full items-center justify-end gap-2">
        <Image src={Logo} alt="Logo" width={24} height={24} />
        <p className="text-bold">Vaultflow</p>
      </div>
    </div>
  </div>
);

export default Footer;
