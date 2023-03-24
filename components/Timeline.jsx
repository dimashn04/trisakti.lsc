import Link from 'next/link'
import React from 'react'

const Timeline = () => {
  return (
    <div id='timeline' className='w-full md:h-screen p-2 flex items-center pt-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-orange-600 font-bold'>Timeline</p>
                <p className='py-4 text-2xl font-bold'>Mark Your Calendar</p>
                <div className='h-96 overflow-auto'>
                    <ol className='relative border-l border-orange-600 dark:border-orange-300'>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">21 March 2023</time>
                            <p class="font-semibold text-gray-900 dark:text-gray-400">Registration and payment starts<br/>(Including early bird registration with benefits)</p>
                            <Link href="/#requirements" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Link>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">28 April 2023</time>
                            <p class="font-bold text-red-600 dark:text-red-300">Early bird registration closes</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">16 June 2023</time>
                            <p class="font-bold text-red-600 dark:text-red-300">Registration & payment closes</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">26 June 2023</time>
                            <p class="font-bold text-blue-600 dark:text-blue-300">Event starts</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>08.00 - 09.00</span> : <span className='text-orange-600 font-semibold'><br/>Opening </span> by Dean of Faculty of Law, Universitas Trisakti</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 12.10</span> : <span className='text-orange-600 font-semibold'><br/>Globalization and the meaning of marriage </span> by Universitas Trisakti and Youngsan University</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>13.30 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/>Bahasa Indonesia </span> by KUIKK Universitas Trisakti</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">27 June 2023</time>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 12.10</span> : <span className='text-orange-600 font-semibold'><br/>Cyber law as a global issue </span> by Universitas Trisakti and Youngsan University</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>13.30 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/>Bahasa Indonesia </span> by KUIKK Universitas Trisakti</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">28 June 2023</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 12.10</span> : <span className='text-orange-600 font-semibold'><br/>How to protect intellectual property in the globalization era </span> by Universitas Trisakti and UNSECO Jakarta</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>13.30 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/>Bahasa Indonesia </span> by KUIKK Universitas Trisakti</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">30 June 2023</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/> Trip to Monas and its surroundings and also the Batik Museum</span> </p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">1 July 2023</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/> Trip to TMII</span> with KUIKK Universitas Trisakti</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">3 July 2023</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 12.10</span> : <span className='text-orange-600 font-semibold'><br/> Food security for the environmental sustainability</span> by Universitas Trisakti and FAO Jakarta</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>13.30 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/>Bahasa Indonesia </span> by KUIKK Universitas Trisakti</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">4 July 2023</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 12.10</span> : <span className='text-orange-600 font-semibold'><br/> What is the importance of ideology in the globalization era</span> by Indonesia National Resilience Institute and Embassy of the Republic of Korea to the Republic of Indonesia</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>13.30 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/>Bahasa Indonesia </span> by KUIKK Universitas Trisakti</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">5 July 2023</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - 12.10</span> : <span className='text-orange-600 font-semibold'><br/> Multilateral diplomacy toward globalization</span> by Embassy of the Republic of Korea to the Republic of Indonesia and Indonesia MoFA</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>13.30 - 15.00</span> : <span className='text-orange-600 font-semibold'><br/>Bahasa Indonesia </span> by KUIKK Universitas Trisakti</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">6 July 2023</time>
                            
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>06.30 - Finished</span> : <span className='text-orange-600 font-semibold'><br/> Trip to Bandung</span> (Participants perform in <span className='text-orange-600 font-semibold'>Bahasa Indonesia</span>)</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">7 July 2023</time>
                            <p class="font-bold text-red-600 dark:text-red-300">Event ends</p>
                            <p class="font-semibold text-gray-900 dark:text-gray-400"><span className='text-green-600'>09.00 - Finished</span> : <span className='text-orange-600 font-semibold'><br/> Trip to Asia Africa Conference Museum and farewell</span> by Dean of Faculty of Law, Universitas Trisakti</p>
                        </li>
                    </ol>
                </div>
            </div>
            
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.istockphoto.com/id/612235546/photo/calendar.jpg?s=170667a&w=0&k=20&c=pZGUy-yy36MhqzTgOyQnQ6oHpuMqFq1k7uznlbCnH2o=" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Timeline