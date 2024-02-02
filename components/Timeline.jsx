import Link from 'next/link'
import React from 'react'

const Timeline = () => {
  return (
    <div id='timeline' className='w-full md:h-screen p-2 flex items-center pt-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest font-bold text-[#8C323E]'>Timeline</p>
                <p className='py-4 text-2xl font-bold text-[#574821]'>Mark Your Calendar</p>
                <div className='h-96 overflow-auto'>
                    <ol className='relative border-l border-[#8C323E] dark:border-[#8C323E]'>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">5 March 2024</time>
                            <p class="font-semibold text-gray-900 dark:text-gray-400">Registration and payment starts</p>
                            <Link href="/#requirements" class="inline-flex items-center px-4 py-2 text-sm font-medium text-[#EFE6A5] bg-gradient-to-r from-[#8C323E] to-[#A33A48] border-gray-200 rounded-lg hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Link>
                        </li>
                        {/* <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">28 April 2023</time>
                            <p class="font-bold text-red-600 dark:text-red-300">Early bird registration closes</p>
                        </li> */}
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">10 June 2024</time>
                            <p class="font-bold text-red-600 dark:text-red-300">Registration & payment closes</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">18 June 2024</time>
                            <p class="font-bold text-blue-600 dark:text-blue-300">Event starts</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>08.00 - 10.00 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Opening </span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>10.30 - 12.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Culture Diversity in Business Law </span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>13.00 - 14.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">19 June 2024</time>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>10.30 - 12.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Comparative Study Legal Culture and Fundamental Right </span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>13.00 - 14.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">20 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>10.30 - 12.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Humanitarian Law and Cultural Heritage </span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>13.00 - 14.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">21 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>10.30 - 12.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Cultural Adaptaion for Refugees </span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>13.00 - 14.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">22 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>10.30 - 12.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Cultural Diplomacy in International Relations </span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>13.00 - 14.30 (ONLINE)</span> : <span className='text-gray-900 font-semibold'><br/>Study: Bahasa Indonesia </span></p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">23 - 24 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>09.00 - 12.10</span> : <span className='text-gray-900 font-semibold'><br/>Students pick-up</span> at Soekarno-Hatta Airport</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">25 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>09.00 - 12.00</span> : <span className='text-gray-900 font-semibold'><br/>Visit to Faculty of Law Universitas Trisakti & 12 May museum</span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>12.00 - 13.30</span> : <span className='text-gray-900 font-semibold'><br/>Lunch break </span> </p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>13.30 - 15.30</span> : <span className='text-gray-900 font-semibold'><br/>Jakarta city tour </span> </p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>15.30 - Finished</span> : <span className='text-gray-900 font-semibold'><br/>Departure from Jakarta to Yogyakarta by train </span> </p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">26 - 28 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'></span><span className='text-gray-900 font-semibold'><br/>Mini Heritage Yogyakarta Package Tour : </span>Tour around Candi Borobudur, Prambanan, & Yogyakarta</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">29 June 2024</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>9.00 - 10.00</span> : <span className='text-gray-900 font-semibold'><br/>Farewell</span></p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-[#8C323E]'>10.30 - Finished</span> : <span className='text-gray-900 font-semibold'><br/>Departure from Yogyakarta to Jakarta by train</span></p>
                            <p class="font-bold text-red-600 dark:text-red-300">Event ends</p>
                        </li>
                    </ol>
                </div>
            </div>
            
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#A33A48]'>
                <img className='rounded-xl' src="https://media.istockphoto.com/id/612235546/photo/calendar.jpg?s=170667a&w=0&k=20&c=pZGUy-yy36MhqzTgOyQnQ6oHpuMqFq1k7uznlbCnH2o=" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Timeline