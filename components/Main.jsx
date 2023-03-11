import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-2xl tracking-widest text-orange-600 font-bold'>
                Indonesia - South Korea
              </p>
              <h1 className='py-4 text-gray-700'>
                SUMMER COURSE
              </h1>
              <h1 className='py-4 text-gray-700'>
                GLOBAL LEGAL COURSES
              </h1>
              <p className='uppercase text-2xl tracking-widest text-green-600 font-bold'>
                26 June – 7 July 2023
              </p>
              <Link href='/#requirements'><button className='p-4 mt-4 font-bold'>REGISTER NOW</button></Link>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main