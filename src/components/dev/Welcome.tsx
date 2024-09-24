import { Logo } from "../Logo";

import Image from "next/image";
import WelcomeMain from "./WelcomeMain";
export default function Welcome() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-400 via-black to-green-800">
      <div className="flex items-end justify-between">
        <div className="relative left-[24px] top-[20px]">
          <Logo />
        </div>
        <div className="relative right-[30px] top-[14px]">
          <Image
            src={"/images/Kuwait.jpg"}
            width={60}
            height={50}
            className=""
            alt=""
          />
        </div>
      </div>

      <div className="relative top-[70px]">
        <WelcomeMain />
      </div>
    </div>
  );
}
