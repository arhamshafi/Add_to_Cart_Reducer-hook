import React, { useEffect, useState } from 'react'
import h_svg from "/light-logo.svg"
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ShoppingCart } from 'lucide-react';
{/* <Calendar /> */ }

function Header({ state, dispatch, side_bar, setside_bar }) {

    let [n_scroll, setn_scroll] = useState(false)
    let [div_add , setdiv_add] = useState(false)


    function del(id) {
        dispatch({
            type: "del", payload: id
        })
    }
    function quantity(ele, new_quanity) {
        dispatch({
            type: "change_quan", payload: { item: ele, quan: new_quanity }
        })
    }

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
        <div className="w-full h-[40vh] py-1 md:h-[60vh] bg-[url('/header_bg.jpg')] bg-center bg-cover relative">
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
                        <div onClick={() => setside_bar(true)} className='relative w-max h-max'>
                            <IoMdCart className='text-2xl tshw text-white cursor-pointer hover:text-yellow-500 transition-all duration-200 ease-linear active:scale-90' />
                            {state.item.length > 0 && (
                                <>
                                    <div className='absolute w-[9px] h-[9px] rounded-full border-2 border-yellow-500 dot_anime top-0 right-0'></div>
                                    <div className='absolute w-[9px] h-[9px] rounded-full bg-yellow-600 top-0 right-0'></div>
                                </>
                            )}
                        </div>
                    </div>
                    <button className='py-2 px-2 bg-black hover:text-yellow-500 transition-all duration-200 ease-linear cursor-pointer active:scale-90 block md:hidden text-white rounded-sm' onClick={() => setside_bar(true)}><FaBarsStaggered /></button>
                </div>


                <div className={`w-full h-screen bg-black fixed z-30 top-0 left-0 transition-all duration-200 ease-linear ${side_bar ? "opacity-60 visible" : "opacity-0 invisible"}`} onClick={() => setside_bar(false)} ></div>
                <div className={`fixed top-0 transition-all duration-300 ease-out ${side_bar ? "right-0" : "right-[-400px]"} z-50 h-screen w-[300px] sm:w-[400px] bg-neutral-800`}  >
                    <RxCross1 className='absolute top-5 right-3 text-2xl text-white hover:text-red-500 cursor-pointer ' onClick={() => setside_bar(false)} />
                    <div className='flex text-xl items-center gap-3 text-white mt-8 ml-3 tracking-[2px] tshwh1 cursor-context-menu'> <BsCart3 className='text-4xl text-yellow-600 tshy' /> <p>Your Cart Items</p> </div>
                    <div className='w-[90%] mx-auto h-[355px] mt-12 scrl pb-4'>

                        {state.item.length === 0 ? (
                            <div className="text-center py-35">
                                <ShoppingCart size={64} className="mx-auto mb-4 text-gray-300 select-none " />
                                <h3 className="text-lg font-medium text-white cursor-context-menu select-none mb-2">Your cart is empty</h3>
                                <p className="text-white cursor-context-menu select-none ">You haven't chosen any items yet!</p>
                            </div>
                        ) : (
                            state.item.map((ele, idx) => {
                                return (
                                    <div key={idx} className='w-full bg-white mt-4 rounded-lg h-[100px] flex justify-evenly items-center '>
                                        <div className='w-[22%] rounded-lg h-[80%] overflow-hidden'> <img className='w-full h-full' src={ele.img2} alt="" /> </div>
                                        <div className='w-[67%] rounded-lg h-[80%] px-3 relative'>
                                            <h1 className='text-black text-md sm:text-lg cursor-context-menu'>{ele.name}</h1>
                                            <p className='text-gray-600 text-md mt-0 cursor-context-menu'>each-price {ele.price} $</p>
                                            <div className='w-[32%] mt-1 flex justify-between items-center h-[25px] rounded-lg '>
                                                <FaMinus className='text-sm text-yellow-600 cursor-pointer select-none' onClick={() => quantity(ele, ele.quantity - 1)} />
                                                <p className='text-black text-md font-bold cursor-context-menu select-none'>{ele.quantity}</p>
                                                <FaPlus className='text-sm text-yellow-600 cursor-pointer select-none' onClick={() => quantity(ele, ele.quantity + 1)} />
                                            </div>
                                            <MdDelete className='absolute top-[44%] cursor-pointer text-xl text-red-500 right-2.5' onClick={() => del(ele.id)} />
                                        </div>
                                    </div>
                                )
                            })
                        )
                        }

                    </div>

                    {/* /////// */}
                   {
                    state.item.length > 0 && (
                         <div className='w-[90%] h-[70px] bg-yellow-600 bxshy rounded-lg mx-auto mt-8 px-4 flex justify-center items-center font-bold'>
                        <h1 className='text-white text-2xl text cursor-context-menu select-none'>Total Amount :  </h1>
                        <h1 className='text-green-700 text-xl font-bold ml-2 tshg select-none cursor-context-menu'>{state.total_amount} $</h1>
                    </div>
                    )
                   }
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
