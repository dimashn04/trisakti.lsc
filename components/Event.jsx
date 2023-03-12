import React from 'react'
import Link from 'next/link'

const Event = () => {
  return (
    <div id='event' className='w-full md:h-screen p-2 flex items-center pt-4 pb-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-8'>
                <p className='uppercase text-xl tracking-widest text-orange-600 font-bold'>Activities</p>
                <p className='py-4 text-2xl font-bold'>See Our Program Timeline</p>
                <ol className='relative border-l border-orange-600 dark:border-gray-700'>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">26 June 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">08.00 - 09.00 : </time>Opening by Dean of Faculty of Law, Universitas Trisakti</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 12.10 : </time>Globalization and the meaning of marriage by Universitas Trisakti and Youngsan University</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">13.30 - 15.00 : </time>Bahasa Indonesia course by KUIKK Universitas Trisakti</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">27 June 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 12.10 : </time>Cyber Law as a Global Issues by Universitas Trisakti and Youngsan University</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">13.30 - 15.00 : </time>Bahasa Indonesia course by KUIKK Universitas Trisakti</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">28 June 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 12.10 : </time>How to protect intellectual property in the globalization era by Universitas Trisakti and UNESCO Jakarta</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">13.30 - 15.00 : </time>Bahasa Indonesia course by KUIKK Universitas Trisakti</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">30 June 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 10.30 : </time>Trip to National Monument</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">10.40 - 15.00 : </time>Trip to Batik Museum</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">1 July 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 15.00 : </time>Trip to TMII</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">3 July 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 12.10 : </time>Food security for the environmental sustainability by Universitas Trisakti and FAO Jakarta</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">13.30 - 15.00 : </time>Bahasa Indonesia course by KUIKK Universitas Trisakti</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">4 July 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 12.10 : </time>What is the importance of ideology in the globalization era by Indonesia National Resilience Institute and Embassy of the Republic of Korea to the Republic of Indonesia</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">13.30 - 15.00 : </time>Bahasa Indonesia course by KUIKK Universitas Trisakti</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">5 July 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - 12.10 : </time>Indonesia & Korean diplomacy toward globalization by Embassy of the Republic of Korea to the Republic of Indonesia and Indonesia MoFA</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">13.30 - 15.00 : </time>Bahasa Indonesia course by KUIKK Universitas Trisakti</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">6 July 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">06.30 - Finished : </time>Travel to Bandung (Participants perform in Bahasa Indonesia)</p>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">7 July 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - Finished : </time>Trip to Asia Africa Conference Museum</p>
                        <p class="font-semibold text-gray-900 dark:text-white"><time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">09.00 - Finished : </time>Farewell by Dean of Faculty of Law, Universitas Trisakti</p>
                    </li>
                </ol>
            </div>
            
            {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.istockphoto.com/id/612235546/photo/calendar.jpg?s=170667a&w=0&k=20&c=pZGUy-yy36MhqzTgOyQnQ6oHpuMqFq1k7uznlbCnH2o=" alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default Event