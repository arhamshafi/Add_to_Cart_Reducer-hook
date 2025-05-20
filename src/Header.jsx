import React from 'react'
import h_svg from "/light-logo.svg"
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
    return (
        <div className="w-full h-[40vh] md:h-[60vh] bg-[url('/header_bg.jpg')] bg-center bg-cover relative">
            <div className='w-full h-full head_black absolute top-0 left-0 z-10'>
                <div className='w-full h-[70px] p-0 px-2 flex justify-between items-center md:px-6'>
                   
                    <div className='w-[170px] h-full flex items-center'> <img src={h_svg} alt="" /></div>
                  
                    <ul className='w-max jutify-center items-center gap-5 hidden md:flex '>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Home</li>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Collection</li>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Contact</li>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Blog</li>
                    </ul>

                    <div className='w-max justify-center items-center gap-5  hidden md:flex'>
                        <FiSearch className='text-2xl tshw text-white cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear active:scale-90'/>
                        <CgProfile className='text-2xl tshw text-white cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear active:scale-90'/>
                        <IoMdCart className='text-2xl tshw text-white cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear active:scale-90' />
                    </div>
                    <button className='py-2 px-2 bg-black hover:text-yellow-500 transition-all duration-200 ease-linear cursor-pointer active:scale-90 block md:hidden text-white rounded-sm'><FaBarsStaggered /></button>
                </div>
            <h1 className='text-center tshwh1 context text-white tracking-[2px] text-4xl md:text-6xl mt-5 md:mt-20 xl:mt-30'>Shop</h1>
            <div className='w-max mx-auto mt-6 flex items-center gap-2 context text-white'> <p className='transition-all cursor-pointer duration-200 ease-linear hover:text-yellow-500'>Home</p> / Shop </div>
            </div>
        </div>
    )
}

export default Header
