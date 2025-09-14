import React from 'react'
import './Header.css';
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";


const Header = () => 
{
  const username = "John Doe "; 
  const userBatch = "Jul25-SET2-Generic-D";
  const userLocation = "Asia/Kolkata"; // This should be dynamic and come from the backend
  return (  
    <>
      <div className='bg-blue-900 flex justify-end h-16 items-center px-3'>
        {/* this should be dynamic and come from the backend and right ended */}
        <h1 className='text-white text-3xl text-bold flex gap-2 items-center text-shadow-lg/30'><IoPersonCircle/>{username}</h1>   
      </div>
      <div className='bg-white-500 text-center  h-14 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.7)]'>
        {/* this should be dynamic and come from the backend and right ended */}
        <div className='flex justify-center gap-10 h-full items-center'>
          <h1 className='text-2xl text-bold flex justify-center items-center gap-2'><IoIosPeople/>{userBatch}</h1>   
          <h1 className='text-2xl text-bold flex justify-center items-center gap-2'><AiOutlineGlobal/>{userLocation}</h1>   
        </div>
      </div>
    </>
  )
}

export default Header