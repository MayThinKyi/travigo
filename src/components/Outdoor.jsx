import React from 'react'

const Outdoor = ({bannerAPI:{title,text,imgSrc,btnText} }) => {
  return (<div id='contact' className='my-[100px] px-2 sm:px-10 md:px-20 lg:px-[120px]'>
      <div className='relative text-center'>
          <img className='h-[250px] rounded-lg w-full object-cover' src={imgSrc} alt='Banner-Image'  />
          <h1 className='banner  absolute top-20 left-[20%]  text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg text-slate-900'>{ title}</h1>
          <p className='banner absolute top-[50%]  left-[20%] '>{text}</p>
          <button className='banner absolute top-[65%] left-[20%]  bg-slate-800 rounded-full drop-shadow-lg shadow-2xl py-2 px-5  text-gray-300 font-semibold'>{btnText }</button>
      </div>
    </div>
  )
}

export default Outdoor