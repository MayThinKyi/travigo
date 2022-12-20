import React from 'react'

const Explore = ({placesAPI}) => {
    return (<div id='explore'>
      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-slate-900'>Explore The Beauty of World</h1>
        <div className='px-5 sm:px-10 lg:px-20 my-6 sm:my-16 grid grid-cols-2 gap-4 sm:gap-6 lg:gap-4 sm:grid-cols-3 lg:grid-cols-4'>
            {placesAPI.map((place) => {
                return <div className='hover:scale-105 cursor-pointer bg-gradient-to-b hover:bg-emerald-300 rounded-lg duration-300  mb-3 sm:mb-3 lg:mb-6 flex gap-1 sm:gap-2 lg:gap-3 flex-nowrap items-center'>
                   <img className='w-[50px] h-[50px] sm:w-[70px]  sm:h-[70px] rounded-lg' src={place.placeImg} />
                    <div>
                           <h1 className='text-[14px] sm:text-[18px] font-bold text-slate-900'>{place.location}</h1>
                        <p className=' text-[14px] font-[450]'>{place.distance }</p>
                    </div>    
            </div>

    })}
      </div>
    </div>
  )
}

export default Explore