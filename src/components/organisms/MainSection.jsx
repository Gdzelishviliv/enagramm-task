import React from "react";
import DownArrow from "../../assets/down-arrow.svg";
import Checkbox from "../../assets/chechkbox.svg";
import ButtonIcn from "../../assets/button.svg";

const MainSection = () => {
  return (
    <>
      <div className="pt-[24px]">
        <div className="flex flex-col md:flex-row justify-between  border-b-[1px] border-[#EDEDED] pb-[16px] md:pb-[17px] mx-[16px] md:mx-[28px]">
          <div className="flex flex-col md:flex-row md:gap-[24px]">
            <div className="flex flex-col relative">
              <input
                className="border-[1px] h-[40px] border-[#EDEDED] rounded-[8px] p-[8px] "
                type="text"
                placeholder="ქართული"
                disabled
              />
              <img
                className="absolute right-[40px] top-2.5"
                src={DownArrow}
                alt="down arrow"
                width={24}
                height={24}
              />
            </div>
            <div className="flex gap-2 mt-[16px] md:mt-0 md:items-center">
              <img src={Checkbox} alt="checkbox" width={24} height={24} />
              <span className="text-[14px] text-[#383A48] font-helvetica">
                ფორმატის შენარჩუნება
              </span>
            </div>
          </div>
          <div className="flex gap-4 mt-[24px] md:mt-0">
            <button className="flex gap-0.5 justify-center items-center rounded-[6px]  bg-[#383A4899] h-[42px] w-full md:w-[150px]">
              <img src={ButtonIcn} alt="icn" />
              <span className="text-[#FFFFFF] text-[14px]">ახლის გახსნა </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
