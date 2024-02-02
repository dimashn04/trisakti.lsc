import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-2xl tracking-widest text-[#8C323E] font-bold'>
                Faculty of Law - Universitas Trisakti Indonesia
              </p>
              <h1 className='py-4 text-[#574821]'>
                SUMMER COURSE
              </h1>
              <h1 className='py-4 text-[#574821]'>
                CULTURE & LEGAL STUDIES
              </h1>
              <p className='uppercase text-2xl tracking-widest text-[#8C323E] font-bold'>
                18 - 29 JuNE 2024
              </p>
              <Link href='/#requirements'><button className='p-4 mt-4 font-bold bg-[#8C323E]'>REGISTER NOW</button></Link>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main