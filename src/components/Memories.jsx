import React from 'react'

const Memories = ({memories:{title,subtitle,text,img,experience} }) => {
  return (<div id='about' className='w-full my-0 lg:my-[100px] px-5 px-2 sm:px-10 md:px-20 flex flex-wrap lg:flex-nowrap items-center gap- lg:gap-[100px]'>
      <div className='order-2 lg:order-1 mt-8 lg:mt-0 mx-auto mb-10 lg:mb-0'>
    <img src={img} className='w-auto h-[50vh] sm:h-[75vh] lg:h-full object-contain' />
    </div>
      <div className=' mt-10 lg:mt-0 order-1 lg:order-2 text-center lg:text-start'>
          <h1 className=' text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-slate-900'>{title}</h1>
          <h1 className=' mt-3 text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-slate-900'>{ subtitle}</h1>
          <p className='text-[15px] sm:text-[18px] mt-5 mb-4'>{text}</p>
          <div className='grid grid-cols-3 gap-2  sm:gap-[20px] lg:gap-[8px] xl:gap-[20px]'>
              <div className='text-center bg-gradient-to-b px-1 py-4 sm:px-8  sm:py-7  lg:px-0 xl:px-4  from-emerald-200 to-green-300 drop-shadow-lg rounded-lg'>
                  <h1 className='mb-2 text-[19px] sm:text-2xl font-bold drop-shadow-lg text-slate-900'>10</h1>
                     <h1 className='text-[12px] sm:text-[18px]  lg:[text-14px] xl:text-[18px] font-semibold text-slate-900'>Years <br></br> Experience</h1>
              </div>
              <div className='text-center bg-gradient-to-b px-1 py-4 sm:px-8  sm:py-7  lg:px-0 xl:px-4 from-emerald-200 to-green-300 drop-shadow-lg rounded-lg'>
                  <h1 className='mb-2 text-[19px] sm:text-2xl font-bold drop-shadow-lg text-slate-900'>400</h1>
                     <h1 className='text-[12px] sm:text-[18px]   lg:[text-14px] xl:text-[18px] font-semibold text-slate-900'>Years <br></br>  Collabration</h1>
              </div>
              <div className='text-center bg-gradient-to-b px-1 py-4 sm:px-8  sm:py-7 lg:px-0 xl:px-4  from-emerald-200 to-green-300 drop-shadow-lg rounded-lg'>
                  <h1 className='mb-2 text-[19px] sm:text-2xl font-bold drop-shadow-lg text-slate-900'>30K+</h1>
                     <h1 className='text-[12px] sm:text-[18px]  lg:[text-14px] xl:text-[18px] font-semibold text-slate-900'>Happy <br></br>Customer </h1>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Memories