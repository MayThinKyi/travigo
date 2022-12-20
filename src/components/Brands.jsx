import React from 'react'

const Brands = ({brands}) => {
  return (<div className='px-[5px] md:px-10 my-20  sm:mt-5 sm:mb-10 overflow-hidden lg:px-[100px] flex md:justify-center items-center gap-4 sm:gap-6 lg:gap-10'>
      {brands?.map((brand) => {
              return <img className='drop-shadow-2xl duration-300 hover:scale-105 cursor-pointer  w-[100px] h-[25px] sm:w-[110px] sm:h-[35px] lg:w-[180px] lg:h-[60px] object-contain' src={brand.iconSrc} />
          })}
    </div>
  )
}

export default Brands