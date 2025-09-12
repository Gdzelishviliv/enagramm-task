import React from "react";
import logo from "../../../assets/main-logo.svg";
import Check from "../../../assets/check.svg"
import Spell from "../../../assets/spell.svg"
import Mic from "../../../assets/mic.svg"
import AlignCenter from "../../../assets/align-center.svg"
import Pdf from "../../../assets/pdf.svg"
import Fragment from"../../../assets/fragment.svg"
import User from "../../../assets/user.svg"
import Dots from "../../../assets/dots-menu.svg"



const DesktopHeader = () => {
  return (
    <>
      <div className="relative sm:hidden lg:block bg-[#132450] min-w-[240px] h-[100vh] px-[24px] pt-[45px]">
        <img src="" alt="" srcset="" />
        <div className="flex gap-[12px] items-center justify-start">
          <img src={logo} alt="Logo" width={24} height={24} />
          <h1 className="text-[#FFFFFF]">ENAGRAM</h1>
        </div>
        <div className="flex flex-col gap-[34px] mt-[60px] text-[#FFFFFF]">
          <div className="flex items-center justify-start gap-[9px]">
            <img src={Check} alt="Check" width={24} height={24} /> <span>მართლმწერი</span>
          </div>
          <div className="flex items-center justify-start gap-[9px] z-999">
            <img src={Spell} alt="Spell" width={24} height={24} /> <span className="text-[#132450]">ტექსტის შედარება</span>
          </div>
          <div className="flex items-center justify-start gap-[9px]">
            <img src={Mic} alt="Mic" width={24} height={24} /> <span>ხმა ტექსტი</span>
          </div>
          <div className="flex items-center justify-start gap-[9px]">
            <img src={AlignCenter} alt="AlignCenter" width={24} height={24} /> <span>ტექსტი ხმა</span>
          </div>
          <div className="flex items-center justify-start gap-[9px]">
            <img src={Pdf} alt="Pdf" width={24} height={24} /> <span>PDF კონვერტაცია</span>
          </div>
        </div>
        <img src={Fragment} alt="Fragment" className="absolute top-[164px] right-[0px]" />
        <div className="absolute bottom-0 left-0 flex justify-between items-center h-[60px] w-[240px] px-[14px]">
            <div className="flex items-center gap-[10px]">
                <img src={User} alt="User" />
                <span className="text-[#FFFFFF]">თამარ ონიანი</span>
            </div>
            <img src={Dots} alt="Dots" />
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
