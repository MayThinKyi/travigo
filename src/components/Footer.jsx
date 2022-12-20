import React from 'react'

const Footer = ({footerAPI:{titles,links,sociallinks}}) => {
    return (<div className='bg-gradient-to-b from-emerald-400 to-green-300 py-5 px-2 sm:p-5 '>
      <div className='grid text-center grid-cols-3'>
      {titles?.map((t) => {
          return <h1 className='my-3 text-[14px] sm:text-xl font-semibold uppercase text-black '> {t.title}</h1>
      })}
      {links?.map((link) => {
         return link.map((l) => {
              return <p className='my-[1px] sm:my-[3px] text-[11px] sm:text-sm font-mono text-slate-900'>{ l.link}</p>
          })
      })}
        </div>
        <hr className='m-5'></hr>
        <div className='flex flex-wrap sm:flex-nowrap justify-evenly items-center'>
            <h1 className=' text-[13px] mt-3 sm:mt-0 sm:text-[14px] order-2 sm:order-1 '>Copyright© All Rights Reserved 2023, <span className='font-semibold'> May Thin Kyi</span></h1>
            <div className='flex items-center gap-3 order-1 sm:order-2 '>
                {sociallinks?.map((s) => {
                return <img className='w-[22px] h-[22px]' src={s.icon} /> 
            })}
            </div>
        </div>
  </div>
  )
}

export default Footer