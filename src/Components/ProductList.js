import React from "react";
import { itemList } from "../Utils/Constant";
import { CommonButton } from "./CommonButton";
const ProductList = () => {
  return (
    <>
      <div
        className={
          "grid grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 gap-5 w-full"
        }
      >
        {itemList?.map((items, key) => {
          return (
            <div
              className="bg-white  rounded-b-lg border border-[#F0F0F0] rounded-[10px] group"
              key={key}
            >
              <div className=" relative h-[261px] max-w-full p-[15px] border-b-2 border-[#EEEEEE] rounded-[10px] flex justify-center items-center overflow-hidden group">
                <div className="relative flex justify-center items-center scale-1 w-[126px] h-[158px]">
                  <img
                    src={items?.imageURL}
                    alt=""
                    className="group-hover:scale-125 transition duration-500 cursor-pointer"
                  />
                </div>
              </div>
              <div className="pt-[18px] pl-5 pr-4 pb-[23px] text-sm">
                <div className="leading-[23px] text-[#161616] font-normal">
                  <div className="uppercase">{items.brandName}</div>
                  <div className="mb-2 w-[150px] truncate">
                    {items.productName}
                  </div>
                </div>
                <div className="flex text-base mb-2">
                  <div className="text-[#D23F57] font-semibold ">
                    {items.currencySymbol}
                    {items.salePrice}
                    <span className="font-semibold">.00</span>
                  </div>
                  <div className="ml-2 text-[#999] line-through font-normal">
                    {items.currencySymbol}
                    {items.regularprice}
                    <span className="font-semibold">.00</span>
                  </div>
                </div>
                <CommonButton btnName="Move To Cart" addtoCart/>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
