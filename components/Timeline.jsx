import Link from 'next/link'
import React from 'react'

const Timeline = () => {
  return (
    <div id='timeline' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-orange-600 font-bold'>Timeline</p>
                <p className='py-4 text-2xl font-bold'>Mark Your Calendar</p>
                <ol className='relative border-l border-orange-600 dark:border-gray-700'>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">11 March 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white">Registration and payment starts<br/>(Including early bird registration with benefits)</p>
                        <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">28 April 2023</time>
                        <p class="font-bold text-red-600 dark:text-white">Early bird registration closes</p>
                        {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">12 June 2023</time>
                        <p class="font-bold text-red-600 dark:text-white">Registration closes</p>
                        {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">15 June 2023</time>
                        <p class="font-bold text-red-600 dark:text-white">Payment closes</p>
                        {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">26 June 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white">Event starts</p>
                        <Link href="/#activities" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">See activities <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Link>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">7 July 2023</time>
                        <p class="font-bold text-red-600 dark:text-white">Event ends</p>
                    </li>
                </ol>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.istockphoto.com/id/612235546/photo/calendar.jpg?s=170667a&w=0&k=20&c=pZGUy-yy36MhqzTgOyQnQ6oHpuMqFq1k7uznlbCnH2o=" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Timeline