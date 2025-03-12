import Link from 'next/link'
import React from 'react'
import Wayang from '../public/assets/wayang.jpg'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div id='timeline' className='w-full md:h-screen p-2 flex items-center pt-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#F7F214] font-bold'>Timeline</p>
                <p className='py-4 text-2xl font-bold text-red-500'>Mark Your Calendar</p>
                <div className='h-96 overflow-auto'>
                    <ol className='relative border-l border-red-600'>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">10 March 2025 - 30 June 2025</time>
                            <p class="font-semibold text-yellow-300 leading-none">10 March 2025 - 10 April 2025 (Early Bird)</p>
                            <p class="font-semibold text-red-600">Registration and payment starts</p>
                            <Link href="/#requirements" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#F7F214] to-[#FFFA15] rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Link>
                        </li>
                        {/* <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">10 June 2024</time>
                            <p class="font-bold text-red-600 dark:text-red-300">Registration & payment closes</p>
                        </li> */}
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">11 August 2025</time>
                            <p class="font-semibold text-yellow-300 leading-none">Event starts</p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Virtual opening ceremony </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture & Assignment: Energy and Climate Change </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">12 August 2025</time>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture & Assignment: Competition Law in tourism </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">13 August 2025</time>
                            
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture & Assignment: Tourism law </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">14 August 2025</time>
                            
                            <p class="font-semibold text-gray-900">Foreign participants prepare to Jakarta</p>
                        </li>
                        {/* <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">22 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Study: Cultural Diplomacy in International Relations </span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>ONLINE</span> : <span className='text-gray-900 font-semibold'><br/>Study: Bahasa Indonesia </span></p>
                        </li> */}
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">15 August 2025</time>
                            <p class="font-semibold text-gray-900">Students pick-up at Soekarno-Hatta Airport</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">16 August 2025</time>
                            
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture & Assignment: Tourism industry in Indonesia </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>12th May Museum tour </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">17 August 2025</time>
                            
                            <p class="font-semibold text-gray-900"><span className='text-red-600'></span>Arrival at Denpasar, Bali</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">18 August 2025</time>
                            
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Acceptance ceremony at Universitas Warmadewa </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture: Customary Law </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Panglipuran Village tour </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">19 August 2025</time>
                            
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Jatiwuluh Village tour </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture: Community Service at Jatiwuluh Village </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Sharing session </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-yellow-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-yellow-300 dark:bg-yellow-300"></div>
                            <time class="mb-1 text-sm font-normal leading-none">20 August 2025</time>
                            
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Visit to Faculty of Engineering </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Lecture: Architecture and Tourism in Bali, Indonesia </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'>OFFLINE</span> : <span className='text-gray-900 font-semibold'><br/>Closing ceremony </span></p>
                            <p class="font-semibold text-gray-900"><span className='text-red-600'></span><span className='text-gray-900 font-semibold'><br/>Departure from Bali, Indonesia </span></p>
                            <p class="font-bold text-red-600 dark:text-red-300">Event ends</p>
                        </li>
                        {/* <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">29 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'></span><span className='text-gray-900 font-semibold'><br/>Farewell</span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'></span><span className='text-gray-900 font-semibold'><br/>Departure from Yogyakarta to Jakarta by train</span></p>
                            <p class="font-bold text-red-600 dark:text-red-300">Event ends</p>
                        </li> */}
                    </ol>
                </div>
            </div>
            
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15]'>
            <img className='rounded-xl' src="https://blog-test.heylaw.id/wp-content/uploads/2022/07/fakultas_1.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Timeline