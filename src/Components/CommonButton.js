export const CommonButton = ({btnName, addtoCart, offer}) =>{
    return(
        <div className='flex justify-center item-center mb-4 '>
              <button type="submit" className={`text-center w-full  rounded-[10px] pt-[10px] pb-[9px] px-[20px] leading-[26px] font-semibold ${addtoCart? " border border-[#F0F0F0] hover:border-indigo-500 bg-[#fff] text-black": offer? "bg-[#167B95] text-white ":"bg-[#000] text-white"}`}>{btnName}</button>
        </div>
    );
}