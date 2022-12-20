import React from 'react'

const Plan = ({pricingapi:{title,text,btn1,btn2,plans}}) => {
  return (<div  id='pricing' className='px-6 sm:px-10 lg:px-20'>
    <h1 className='mt-10  text-center mb-3 text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-slate-900'>{title}</h1>
      <p className='text-xl font-[400] text-center'>{text}</p>
      <button className='mt-8 mb-14 gap-1 sm:gap-5 w-full sm:w-max sm:mx-auto  button-light  border border-gray-200 flex items-center justify-center'>
          <button className='button-emrald drop-shadow-lg'>Monthly</button>
          <button className='button-light drop-shadow-lg'>Yearly</button>
      </button>
      <div className='mb-20 flex  flex-wrap md:flex-nowrap sm:gap-5 md:gap-10 items-center justify-center '>
          {plans?.map((plan) => {
              return <div className='flex flex-col mb-8 md:mb-0   border drop-shadow-lg shadow-sm border-gray-200 rounded-lg hover:scale-105 p-5'>
                  <div className='flex items-center gap-5 md:gap-1 lg:gap-5 justify-evenly'>
                      <img className='w-[50px] h-[50px] lg:w-[63px] lg:h-[60px]' src={plan.planicon} />
                      <div>
                          <h1 className='sm:text-[15px] lg:text-[18px] sm:whitespace-nowrap font-semibold text-slate-900'>{plan.title}</h1>
                          <p className='sm:text-[15px] lg:text-[14px] sm:whitespace-nowrap'>{plan.text}</p>
                      </div>
                      <div>
                            <p className='sm:text-[15px] lg:text-[18px] sm:whitespace-nowrap font-bold text-slate-900'>{ plan.plantype}</p>
                      </div>
                  </div>
                  <hr className='my-4'></hr>
                  <div className='p-5'>
                      {plan.plancontent?.map((p) => {
                          return <div className='flex items-center mb-3'><img className=' mr-3' src={p.iconbox} /> <span className='md:text-[15px] lg:text-[18px]'>{p.text }</span></div>
                      })}
                  </div>
                  <div className='text-center'>
                      <button className='button-emrald'>{plan.buttonText }</button>
                  </div>
                  
            </div>
          })}
      </div>
    </div>
  )
}

export default Plan