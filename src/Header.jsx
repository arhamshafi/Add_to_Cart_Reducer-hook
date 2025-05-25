import React, { useEffect, useState } from 'react'
import h_svg from "/light-logo.svg"
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

function Header() {

    let [n_scroll, setn_scroll] = useState(false)
    useEffect(() => {

        function navscrol() {
            if (window.scrollY > 100) {
                setn_scroll(true)
            }
            else {
                setn_scroll(false)
            }
        }
        window.addEventListener("scroll", navscrol)

        return () => window.removeEventListener("scroll", navscrol)
    }, [])
    return (
        <div className="w-full h-[40vh] md:h-[60vh] bg-[url('/header_bg.jpg')] bg-center bg-cover relative">
            <div className={`w-full h-full head_black absolute top-0 left-0 z-10  `}>
                <div className={`w-full h-[40px] navbar sm:h-[60px] p-0 px-2 flex justify-between transition-all duration-200 ease-linear items-center md:px-6 fixed top-0 left-0 z-20 ${n_scroll ? "bg-black" : "bg-transparent"}`}>

                    <div className='w-[130px] md:w-[170px] h-full flex items-center'> <img src={h_svg} alt="" /></div>

                    <ul className='w-max jutify-center items-center gap-5 hidden md:flex '>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Home</li>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Collection</li>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Contact</li>
                        <li className='py-1 px-2 tshw text-white text-md font-bold cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear tracking-[1px]'>Blog</li>
                    </ul>

                    <div className='w-max justify-center items-center gap-5  hidden md:flex'>
                        <FiSearch className='text-2xl tshw text-white cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear active:scale-90' />
                        <CgProfile className='text-2xl tshw text-white cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear active:scale-90' />
                        <IoMdCart className='text-2xl tshw text-white cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear active:scale-90' />
                    </div>
                    <button className='py-2 px-2 bg-black hover:text-yellow-500 transition-all duration-200 ease-linear cursor-pointer active:scale-90 block md:hidden text-white rounded-sm'><FaBarsStaggered /></button>
                </div>
                {/* ////////////////////////// */}
                <h1 className='text-center tshwh1 context h-anime text-white tracking-[2px] text-4xl md:text-6xl mt-23 md:mt-35 xl:mt-40'>SHOP</h1>
                <div className='w-max mx-auto mt-6 flex h-anime items-center gap-2 context text-white'> <p className='transition-all cursor-pointer duration-200 ease-linear hover:text-yellow-500'>Home</p> / Shop </div>

                <div className='w-[50px] h-[50px]  rounded-full absolute top-[33%] left-[22%] border-yellow-600 border-4 hidden lg:block '>
                    <div className='w-full h-full absolute rounded-full  text-xl text-yellow-600 flex justify-center items-center'><FaPlus /></div>
                </div>
                <div className='w-[50px] h-[50px]  rounded-full absolute top-[33%] left-[22%] border-yellow-600 border-2 yellow_anime hidden lg:block '></div>

                <div className='w-[40px] h-[40px]  rounded-full absolute top-[65%] right-[11%] border-yellow-600 border-4  hidden lg:block '>
                    <div className='w-full h-full absolute rounded-full  text-xl text-yellow-600 flex justify-center items-center'><FaPlus /></div>
                </div>
                <div className='w-[40px] h-[40px]  rounded-full absolute top-[65%] right-[11%] border-yellow-600 border-2 yellow_anime_delay hidden lg:block'></div>
            </div>
        </div>
    )
}
export default Header
