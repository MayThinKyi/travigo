import React, { useState } from 'react'
import  logo from '../images/logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = ({ links }) => {
  const [nav,setNav] = useState(false);
  return (<div className='flex items-center fixed top-0 left-0 right-0 bg-[#fffc] z-30 py-4 px-5 md:px-20  justify-between items-center'>
            <img src={logo} className='h-[40px] w-auto object-contain' alt='Trivigo-logo' />
            <ul className='hidden cursor-pointer gap-6 md:flex justify-between items-center'>
          {links.map((link) => {
             return <li className='text-[19px]' id={link.id}>{ link.link}</li>
                })}
      </ul>
    <button className=' hidden md:inline button-emrald drop-shadow-lg'>Join Us</button>
            <AiOutlineMenu className='inline md:hidden'  onClick={()=>setNav(!nav)} size={35} />
   {nav &&  <div className='w-full duration-200  h-[100vh] absolute top-0 left-0 right-0 z-[999] bg-black/60'>
      <div className='w-[300px]  py-6 px-10 h-full bg-emerald-100 absolute top-0 left-0'>
        <div className='flex justify-end '>
          <AiOutlineClose onClick={()=>setNav(!nav)} size={30} />
        </div>
         <ul className=' cursor-pointer gap-6 flex flex-col justify-center items-start'>
          {links.map((link) => {
             return <li className='text-[19px]' id={link.id}>{ link.link}</li>
                })}
      </ul>
          </div>
    </div>}
     </div>
    
  )
}

export default Navbar