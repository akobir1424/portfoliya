//icons
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export default function footer() {
  return (
    <div className=" items-center flex  justify-center gap-[50px] ">
      <p className="text-[#c3c5c4] cursor-pointer">
        © 2023 SinanTokmak. All rights reserved.
      </p>
      <p className="text-[#c3c5c4] cursor-pointer">Privacy Policy</p>
      <p className="text-[#c3c5c4] cursor-pointer">Terms & Conditions</p>
      <a
        className="flex p-[10px] bg rounded-[6px] gap-2 items-center"
        href="mailto:maxmaraimovakobir04@gmail.com"
      >
        <MdOutlineEmail className="text-[#12F7D6] text-[21px]" />
      </a>
      <a
        className="flex p-[10px] bg rounded-[6px] gap-2 items-center"
        href="https://t.me/ansor_30"
      >
        <TbBrandTelegram className="text-[#12F7D6] text-[21px]" />
      </a>
      <a
        className="flex p-[10px]  bg rounded-[6px] gap-2 items-center"
        href=""
      >
        <CiLinkedin className="text-[#12F7D6] text-[21px]" />
      </a>
      <a
        className="flex p-[10px]  bg rounded-[6px] gap-2 items-center"
        href="tel:+998904620677"
      >
        <MdOutlinePhoneInTalk className="text-[#12F7D6] text-[21px]" />
      </a>
    </div>
  );
}
