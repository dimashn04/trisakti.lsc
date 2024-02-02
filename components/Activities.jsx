import React from 'react'
import Image from 'next/image'
import bislaw from '../public/assets/business.jpg'
import conslaw from '../public/assets/conslaw.jpg'
import humlaw from '../public/assets/human-rights-law.png'
import rfg from '../public/assets/rfg.jpg'
import ide from '../public/assets/ideology.jpg'
import diplo from '../public/assets/diplomatic.jpg'
import indof from '../public/assets/indof.jpg'

const Activities = () => {
  return (
    <div id='activities' className='w-full lg:h-screen p-2 pt-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#8C323E] font-bold'>Courses</p>
            <p className='py-4 text-2xl font-bold text-[#574821]'>Learn Exciting Courses</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={bislaw} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Business Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={conslaw} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Constitutional Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={humlaw} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Humanitarian Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={rfg} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Refugees Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={diplo} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>International Relations</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={indof} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bahasa Indonesia</h3>
                        </div>
                    </div>
                </div>

            </div>
            {/* <p className='py-4 text-2xl pt-16 font-bold'>Attractions</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src='/../public/assets/monas.jpg' width={500} height={500}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Cyber Law</h3>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}   

export default Activities