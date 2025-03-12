import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-2xl tracking-widest text-black font-bold'>
                Fac. of Law - Universitas Trisakti & Fac. of Industrial Technology - Universitas Warmadewa
              </p>
              <h1 className='py-4 text-[#F7F214]'>
                SUMMER COURSE
              </h1>
              <h1 className='py-4 text-[#F7F214]'>
                LEGAL & TECH STUDIES OF ECO-TOURISM IN INDONESIA
              </h1>
              <p className='uppercase text-2xl tracking-widest text-red-500 font-bold'>
                11 - 21 AUGUST 2025
              </p>
              <Link href='/#requirements'><button className='p-4 mt-8 font-bold bg-[#8C323E]'>REGISTER NOW</button></Link>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main