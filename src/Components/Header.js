
import React from 'react';
import summer from "../Assets/Images/SUMMER.png";
import Menubar from './MenuItem';
import { CommonButton } from './CommonButton';

export default function Header() {

    return (
        <div className='w-full border-b-2 border-[#0000000F] pl-[15px] pr-[15px] xl:pl-0 lg:pr-0 fixed top-0 left-0 z-[999] bg-white  '>
            <div className='max-w-screen-xl m-auto pt-11 pb-4 flex items-center justify-between max-xl:px-3'>
                <img src={summer} alt='Logo' className='w-[147px] h-[21px]'/>
                <Menubar/>
                 <CommonButton btnName="Login"/>    
             </div> 
        </div>
    )
}