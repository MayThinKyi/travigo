import React from 'react'
import { navlinks } from '../data/travigoData'
import Navbar from './Navbar'

const Hero = ({hero:{title,subtitle,text,btn1,btn2,img}}) => {
    return (<div id='home' className='pt-[100px] bg-gradient-to-b from-emerald-200 to-white'> 
       <Navbar links={navlinks} />
      <div className='text-center mt-10'>
      <h1 className='text-3xl md:text-4xl lg:text-6xl drop-shadow-lg text-slate-900 font-bold'> {title}</h1>
      <h1 className='text-3xl md:text-4xl lg:text-6xl mt-1 drop-shadow-lg text-slate-900 font-bold'> {subtitle}</h1>
      <p className='my-6'> {text}</p>
      <div className='flex flex-wrap sm:flex-nowrap justify-center items-center gap-8'>
          <button className='button-emrald'>{btn1}</button>
            <button className='button-light'>{ btn2}</button>
      </div>
        <div className=' px-5 sm:px-10 lg:px-0'>
                <img alt='Dashboard' src={img} className='h-[50vh] lg:h-[80vh] mt-0 lg:mt-16 w-full object-contain  drop-shadow-emrald' />

      </div>
      </div>
  </div>
  )
}

export default Hero