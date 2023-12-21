import React from "react";
import banner from "../Assets/Images/banner1.png";
import { CommonButton } from "./CommonButton";

const StoryPart = () => {
  return (
    <div className="flex max-w-ful hidden lg:block">
    <div className="max-w-full sm:max-w[]   w-full rounded-lg">
      <div className="relative bg-[#EFFBFE] h-full min-h-[498px]">
        <img src={banner} />
      <div className="absolute top-2/4 md:right-[-55px] md:right-[50px]  xl:right-[203px]  -translate-y-1/2 pr-9 w-full max-w-[500px] text-[#222] text-left">
        <h1 className="text-[52px] leading-[54px] font-bold my-2 uppercase ">
           <span className="mt-4 text-[#D23F57]">Grab the Offer</span> Look and Book
          </h1>
          <div className="mt-6">
          < CommonButton btnName="Shope Now" offer/>
          </div>
         
        </div>
        
      </div>
    </div>
    </div>
  );
}

export default StoryPart;
