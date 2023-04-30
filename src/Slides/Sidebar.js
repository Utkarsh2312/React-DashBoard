import React from 'react';
import { FaArtstation, FaDashcube, FaRegSun, FaSchlix, FaUser} from "react-icons/fa";

function Sidebar() {
  return (
    <div className='bg-[#000000] m-[20px] px-[40px] h-[670px] rounded-3xl mb-[30px] fixed'>
        <div className='px-[15px] py-[30px] flex items-center justify-center'>
            <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer font-sans text-2xl'>Board.</h1>
        </div>
        <div className='flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
          <FaDashcube color='white'/>
          <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
        </div>
        <div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaArtstation color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white hover:underline'>Transactions</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaSchlix color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white hover:underline'>Schedules</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaUser color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white hover:underline'>Users</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <FaRegSun color='white'/>
              <p className='text-[14px] leading-[20px] font-normal text-white hover:underline'>Settings</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] pt-[230px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[14px] leading-[20px] text-xs text-white hover:underline'>Help</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
            <div className='flex items-center gap-[10px]'>
              <p className='text-[14px] leading-[20px] text-xs text-white hover:underline'>Contact Us</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar