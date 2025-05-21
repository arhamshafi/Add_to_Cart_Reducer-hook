import React from 'react'
import { GoNorthStar } from "react-icons/go";
import data from './data';

function Section() {

    console.log(data);
    
  return (

<div className="w-full s1 py-20 flex">
    <div className='w-[30%] px-8'>
        <h1 className='text-3xl font-bold text-white tshwh1 context tracking-[2px]'>Collection</h1>
        <div className='w-full h-max py-2 mt-8'>
            <p className='w-max cursor-pointer mt-4 h-[30px] flex items-center text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar/> Home Decoration</p>
            <p className='w-max cursor-pointer mt-4 h-[30px] flex items-center text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar/> Indoor Decoration</p>
            <p className='w-max cursor-pointer mt-4 h-[30px] flex items-center text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar/> Office Decoration</p>
            <p className='w-max cursor-pointer mt-4 h-[30px] flex items-center text-md text-white tshw hover:text-yellow-600 transition-all duration-150 ease-linear  gap-3 tracking-[1px]'><GoNorthStar/> Outdoor Decoration</p>
        </div>
        <h1 className='text-3xl context tshwh1 mt-12 font-bold text-white tracking-[1px]'>Filter By Price</h1>
        <div className='w-full h-[5px] bg-yellow-600 mt-8 relative'>
            <div className='w-[20px] h-[20px] bg-black border-1 border-white rounded-full absolute top-[-8px] left-[-2px]'></div>
            <div className='w-[20px] h-[20px] bg-black border-1 border-white rounded-full absolute top-[-8px] right-[-2px]'></div>
        </div>
        <p className='text-gray-400 text-2xl mt-7 font-bold context'>Price : $ 180 ___ $ 367 </p>
        <button className='border-1 border-yellow-600 text-yellow-600 cursor-pointer transition-all duration-200 ease-linear hover:bg-yellow-700 hover:text-white box_sh hover:scale-110 active:scale-100 rounded-2xl py-2 px-6 text-2xl mt-8'>Filter</button>
    </div>
<div className='w-[70%] border-l-white border-l py-2 flex justify-center items-center flex-wrap gap-6'>
       {
        data.map((ele , idx )=>{
            return(
                 <div className='w-[30%] h-max py-2 mt-4'>
            <div className='w-full rounded-xl h-[300px] relative'>
                <img className='absolute top-0 left-0 w-full h-full rounded-2xl' src={ele.img1} alt="" />
                {/* <img className='absolute top-0 left-0 w-full h-full rounded-2xl' src={ele.img2} alt="" /> */}
            </div>
            <div className='w-full py-2 mt-4 text-center'>
                <p className='text-gray-400 text-xl tracking-[1px] context'>{ele.category}</p>
                <h2 className='text-2xl mt-2 text-white tshwh1tracking-[1px] context'>{ele.name}</h2>
                <p className='text-gray-400 text-lg mt-4 tracking-[1px] context'>$ {ele.price}</p>
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