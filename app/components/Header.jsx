import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
          Hi! I'm William Mark{" "}
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
      </div>
    </div>
  );
};

export default Header;
