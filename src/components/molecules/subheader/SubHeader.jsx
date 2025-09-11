import React from 'react'
import SpellSVG from "../../../assets/spell.svg"
import DownArrow from "../../../assets/down-arrow.svg"

const SubHeader = () => {
  return (
    <>
    <div className='flex border-b-[1px] border-[#EDEDED] h-[60px] items-center justify-left px-[30px]'>
        <div className='flex gap-[4px] items-center justify-center cursor-pointer'>
            <img src={SpellSVG} alt="spell"  />
            <h3 className='text-[12px] md:text-[16px] font-bold text-[#132450]'>ტექსტის შედარება</h3>
            <img src={DownArrow} alt="down arrow"  />
        </div>
    </div>
    </>
)
}

export default SubHeader