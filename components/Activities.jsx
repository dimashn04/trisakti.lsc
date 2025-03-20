import React from 'react'
import Image from 'next/image'
import energy from '../public/assets/ENERGY_CLIMATE.jpeg'
import complaw from '../public/assets/COMP_LAW.jpg'
import tourismlaw from '../public/assets/TOURISM.jpg'
import indof from '../public/assets/indof.jpg'
import tourismind from '../public/assets/TOURISM_INDUSTRY.jpg'
import adat from '../public/assets/ADAT.jpg'
import comservice from '../public/assets/COM_SERVICE.jpg'
import arch from '../public/assets/ARCH_BALI.jpg'

const Activities = () => {
  return (
    <div id='activities' className='w-full lg:h-screen p-2 pt-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#F7F214] font-bold'>Courses</p>
            <p className='py-4 text-2xl font-bold text-red-500'>Learn Exciting Courses</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={energy} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Energy and Climate Change</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={complaw} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Competition Law in Tourism</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={tourismlaw} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tourism Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={tourismind} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tourism Industry in Indonesia</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={adat} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Customary Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={comservice} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Community Service</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={arch} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Architecture and Tourism in Bali</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
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