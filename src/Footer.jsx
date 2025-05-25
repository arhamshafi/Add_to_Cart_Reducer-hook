import React from 'react'
import h_svg from "/light-logo.svg"
import f_img1 from "/Home-2-Secton-2-03.jpg"
import f_img2 from "/Instagram-04-300x300.jpg"
import f_img3 from "/Home-2-Secton-2-04.jpg"
import f_img4 from "/Instagram-01-300x300.jpg"
import f_img5 from "/Instagram-02-300x300.jpg"
import f_img6 from "/Instagram-03-300x300.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import visa from "/visa@4x.png"
import skrill from "/skrill@4x.png"
import paypal from "/Paypal@4x.png"
import amex from "/Amex@4x.png"
import apay from "/apay@4x.png"

function Footer() {
    return (
        <div className='w-full py-7 sm:py-15 bg-black text-white'>
            <div className='w-[90%] mx-auto flex flex-wrap justify-between items-center cursor-context-menu'>
                <div className='text-xl md:w-[45%] lg:w-[28%] h-[270px] flex justify-between flex-col '>
                    <div className='w-[150px]'><img src={h_svg} alt="" /></div>
                    <p className='w-full text-white text-xl lg:text-lg tshw2'>Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec urna tempus tempus</p>
                    <div className='w-[200px] h-[30px] text-2xl flex justify-between items-center'>
                        <FaInstagram  className='hover:text-orange-400 cursor-pointer'/>
                        <FaTwitter className='hover:text-gray-600 cursor-pointer'/>
                        <SiGmail className='hover:text-red-600 cursor-pointer'/>
                        <FaWhatsapp className='hover:text-green-600 cursor-pointer'/>

                    </div>
                </div>
                <div className='w-[52%] lg:w-[40%] h-[270px] hidden md:flex justify-between'>
                    <div className='w-[32%] h-full '>
                        <h1 className='text-xl lg:text-2xl tshw2 text-white'>Useful Links</h1>
                        <div className='mt-6'>

                            <p className='text-gray-300 text-sm w-max tshw mt-2 lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>History</p>
                            <p className='text-gray-300 text-sm w-max tshw mt-2 lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Our Team</p>
                            <p className='text-gray-300 text-sm w-max tshw mt-2 lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Privacy Policy</p>
                            <p className='text-gray-300 text-sm w-max tshw mt-2 lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Services Offered</p>
                            <p className='text-gray-300 text-sm w-max tshw mt-2 lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Product Catalog</p>
                        </div>
                    </div>
                    <div className='w-[32%] h-full '>
                        <h1 className='text-2xl tshw2 text-white'>Information</h1>
                        <div className='mt-6'>
                            <p className='text-gray-300 w-max tshw mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>FAQ/Return</p>
                            <p className='text-gray-300 w-max tshw mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Privacy/Terms</p>
                            <p className='text-gray-300 w-max tshw mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Affiliate</p>
                            <p className='text-gray-300 w-max tshw mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Sizzing Guide</p>
                            <p className='text-gray-300 w-max tshw mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy ' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Accessibility</p>
                        </div>
                    </div>


                    <div className='w-[32%] h-full '>
                        <h1 className='text-2xl tshw2 text-white'>Support</h1>
                        <div className='mt-6'>
                            <p className='text-gray-300 tshw w-max mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Your Account</p>
                            <p className='text-gray-300 tshw w-max mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Press Release</p>
                            <p className='text-gray-300 tshw w-max mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Return Center</p>
                            <p className='text-gray-300 tshw w-max mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>App Download</p>
                            <p className='text-gray-300 tshw w-max mt-2 text-sm lg:text-md transition-all duration-200 ease-linear cursor-pointer hover:text-yellow-600 hover:tshy' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Advertsments</p>
                        </div>
                    </div>
                </div>
                <div className='w-[98%] mt-8 mx-auto py-5 flex md:hidden flex-col'>

                    <div className='w-full h-[50px] bg-gray-900 rounded-3xl mt-8 px-6 text-xl cursor-context-menu flex justify-between items-center text-white tshw2'>
                        <p>Useful Links</p>
                        <FaPlus />
                    </div>
                     <div className='w-full h-[50px] bg-gray-900 rounded-3xl mt-8 px-6 text-xl cursor-context-menu flex justify-between items-center text-white tshw2'>
                        <p>Information</p>
                        <FaPlus />
                    </div>
                     <div className='w-full h-[50px] bg-gray-900 rounded-3xl px-6 mt-8 text-xl cursor-context-menu flex justify-between items-center text-white tshw2'>
                        <p>Support</p>
                        <FaPlus />
                    </div>

                </div>
                <div className='w-[95%] mx-auto md:mx-0 sm:w-[60%] md:w-[50%] mt-8 lg:mt-0 lg:w-[29%] f_img h-[350px] sm:h-[270px] flex flex-wrap justify-between items-center'>
                    <div className='w-[30%] group h-[40%] overflow-hidden rounded-lg relative'> <div className='w-full opacity-0 z-10 group-hover:opacity-70 h-full bg-black transition-opacity duration-300 ease-out  absolute'></div> <img className='group-hover:scale-115 transition-all duration-200 ease-out  w-full h-full ' src={f_img2} alt="" /></div>
                    <div className='w-[30%] group h-[40%] overflow-hidden rounded-lg relative'> <div className='w-full opacity-0 z-10 group-hover:opacity-70 h-full bg-black transition-opacity duration-300 ease-out  absolute'></div> <img className='group-hover:scale-115 transition-all duration-200 ease-out  w-full h-full ' src={f_img1} alt="" /></div>
                    <div className='w-[30%] group h-[40%] overflow-hidden rounded-lg relative'> <div className='w-full opacity-0 z-10 group-hover:opacity-70 h-full bg-black transition-opacity duration-300 ease-out  absolute'></div> <img className='group-hover:scale-115 transition-all duration-200 ease-out  w-full h-full ' src={f_img3} alt="" /></div>
                    <div className='w-[30%] group h-[40%] overflow-hidden rounded-lg relative'> <div className='w-full opacity-0 z-10 group-hover:opacity-70 h-full bg-black transition-opacity duration-300 ease-out  absolute'></div> <img className='group-hover:scale-115 transition-all duration-200 ease-out  w-full h-full ' src={f_img4} alt="" /></div>
                    <div className='w-[30%] group h-[40%] overflow-hidden rounded-lg relative'> <div className='w-full opacity-0 z-10 group-hover:opacity-70 h-full bg-black transition-opacity duration-300 ease-out  absolute'></div> <img className='group-hover:scale-115 transition-all duration-200 ease-out  w-full h-full ' src={f_img5} alt="" /></div>
                    <div className='w-[30%] group h-[40%] overflow-hidden rounded-lg relative'> <div className='w-full opacity-0 z-10 group-hover:opacity-70 h-full bg-black transition-opacity duration-300 ease-out  absolute'></div> <img className='group-hover:scale-115 transition-all duration-200 ease-out  w-full h-full ' src={f_img6} alt="" /></div>
                </div>
            </div>
            <div className='w-[90%] border-t pt-2 mx-auto mt-8 flex justify-center items-center gap-6'>
                    <img className='w-[40px]' src={amex} alt="" />
                    <img className='w-[40px]' src={apay} alt="" />
                    <img className='w-[40px]' src={skrill} alt="" />
                    <img className='w-[40px]' src={paypal} alt="" />
                    <img className='w-[40px]' src={visa} alt="" />
            </div>
        </div>
    )
}

export default Footer