import React from 'react'
import { GoNorthStar } from "react-icons/go";
import { SlLike } from "react-icons/sl";
import { GiWarlockEye } from "react-icons/gi";
import { HiMiniShoppingCart } from "react-icons/hi2";
import data from './data';

function Section() {


    return (

        <div className="w-full s1 py-20 flex flex-wrap">
            <div className='w-full md:w-[30%] px-4 lg:px-8 md:block '>
                <h1 className='text-5xl md:text-3xl font-bold text-white text-center md:text-left tshwh1 context tracking-[2px]'>Collection</h1>
                <div className='w-full h-max py-2 mt-8'>
                    <p className='w-max cursor-pointer mx-auto md:m-0 mt-4 h-[30px] flex items-center text-xl md:text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar className='hidden md:block' /> Home Decoration</p>
                    <p className='w-max cursor-pointer mx-auto md:m-0 mt-4 h-[30px] flex items-center text-xl md:text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar className='hidden md:block' /> Indoor Decoration</p>
                    <p className='w-max cursor-pointer mx-auto md:m-0 mt-4 h-[30px] flex items-center text-xl md:text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar className='hidden md:block' /> Office Decoration</p>
                    <p className='w-max cursor-pointer mx-auto md:m-0 mt-4 h-[30px] flex items-center text-xl md:text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar className='hidden md:block' /> Outdoor Decoration</p>
                </div>
                <h1 className='text-3xl context tshwh1 mt-12 font-bold text-white md:block hidden tracking-[1px]'>Filter By Price</h1>
                <div className='w-full h-[5px] bg-yellow-600 mt-8 relative md:block hidden'>
                    <div className='w-[20px] h-[20px] bg-black border-1 border-white rounded-full absolute top-[-8px] left-[-2px]'></div>
                    <div className='w-[20px] h-[20px] bg-black border-1 border-white rounded-full absolute top-[-8px] right-[-2px]'></div>
                </div>
                <p className='text-gray-400 text-2xl mt-7 font-bold context md:block hidden'>Price : $ 180 ___ $ 367 </p>
                <button className='border-1 block md:mx-0 mx-auto border-yellow-600 text-yellow-600 cursor-pointer transition-all duration-200 ease-linear hover:bg-yellow-700 hover:text-white box_sh hover:scale-110 active:scale-100 rounded-2xl w-[70%] md:w-max  py-2 px-6 text-2xl mt-8'>Filter</button>
            </div>
            <div className='w-full md:w-[70%] border-0 md:border-l-white border-l py-2 px-3 flex justify-center items-center flex-wrap gap-3 xl:gap-6'>
                {
                    data.map((ele, idx) => {
                        return (
                            <div key={idx} className=' w-[80%]  sm:w-[47%] lg:w-[30%] h-max py-2 mt-4 group cursor-pointer'>
                                <div className='w-full rounded-xl h-[300px] relative overflow-hidden'>
                                    <img
                                        className='absolute top-0 left-0 w-full h-full rounded-2xl object-fit transition-opacity duration-300 ease-linear'
                                        src={ele.img1}
                                        alt=''
                                    />

                                    <img
                                        className='absolute top-0 left-0 w-full h-full rounded-2xl object-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear'
                                        src={ele.img2}
                                        alt=''
                                    />
                                    <div className="absolute inset-0 w-full h-full z-10 crt_div bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear flex justify-end items-center text-white">
                                        <div className='w-[45px] h-full '>
                                            <SlLike className='text-white text-2xl mt-12 hover:text-yellow-600 transition-all duration-300 ease-linear' />
                                            <GiWarlockEye className='text-white text-2xl mt-6 hover:text-yellow-600 transition-all duration-300 ease-linear' />
                                            <HiMiniShoppingCart className='text-white text-2xl mt-6 hover:text-yellow-600 transition-all duration-300 ease-linear' /></div>
                                    </div>
                                </div>

                                <div className='w-full py-2 mt-4 text-center'>
                                    <p className='text-gray-400 text-xl tracking-[1px] context'>{ele.category}</p>
                                    <h2 className='lg:text-lg 1xl:text-2xl mt-2 text-white tshwh1 tracking-[1px] context'>{ele.name}</h2>
                                    <p className='text-gray-400 text-lg mt-4 tracking-[1px] context'>Price : $ {ele.price}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>

    )
}

export default Section