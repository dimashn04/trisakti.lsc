import React from 'react'
import Image from 'next/image'
import cylaw from '../public/assets/cyber-law.jpg'
import flaw from '../public/assets/family-law.jpg'
import iprop from '../public/assets/intell-prop.jpg'
import envi from '../public/assets/environment.jpg'
import ide from '../public/assets/ideology.jpg'
import diplo from '../public/assets/diplomatic.jpg'
import indof from '../public/assets/indof.jpg'

const Activities = () => {
  return (
    <div id='activities' className='w-full lg:h-screen pt-80 p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-orange-600 font-bold'>Courses</p>
            <p className='py-4 text-2xl font-bold'>Learn Exciting Courses</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={cylaw} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Cyber Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={flaw} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Family Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={iprop} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Intellectual Property Rights</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={envi} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Environmental Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={ide} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Ideology</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image alt='/' src={diplo} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Diplomatic Law</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
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