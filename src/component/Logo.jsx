import React from 'react'
import logo from '../assets/logo-full.svg';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Logo = () => {
  return (
    <div>
      <div className='flex sm:flex-row flex-col items-center justify-between p-4'>
             <div><img src={logo} alt="#" className='w-full max-w-[150px] my-2'/></div>
             <div className='flex space-x-4 '>
               <FaFacebook size={30} className='bg-[#39b75d] rounded-full text-white'/>
               <RiInstagramLine size={30} className='bg-[#39b75d] rounded-full text-white'/>
               <IoLogoLinkedin size={30} className='bg-[#39b75d] rounded-full text-white'/>
               <FaXTwitter size={30} className='bg-[#39b75d] rounded-full text-white'/>
               <FaYoutube size={30} className='bg-[#39b75d] rounded-full text-white'/>
               <AiFillTikTok size={30} className='bg-[#39b75d] rounded-full text-white'/>
             </div>
            </div>
    </div>
  )
}

export default Logo
