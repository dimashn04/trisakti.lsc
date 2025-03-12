import React from 'react'
import hotel from '../public/assets/HOTEL_LSC.jpg'
import Image from 'next/image'

const Requirements = () => {
  return (
    <div id='requirements' className='w-full md:h-screen p-2 flex items-center py-16 pt-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#F7F214] font-bold'>Requirements & Registration</p>
                <p className='py-4 text-2xl font-bold text-red-500'>See Requirements & Register Now</p>
                <div className=''>
                    <ol className='relative dark:border-gray-700'>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">1. For Indonesian and foreign students</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">2. Must be 12th Grade High School Student and/or Undergraduate Student from any Faculty</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">3. Must have student ID</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">4. Must have valid passport (for international students)</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">5. Must make official statement letter</p>
                            <a href="https://docs.google.com/document/d/1TZeTRlBcaoFHzS2-u0HXUFDuAy1kRBm8/edit?usp=sharing&ouid=112279601469461014351&rtpof=true&sd=true" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#F7F214] to-[#FFFA15] rounded-lg">Download the official statement letter template <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">6. Must register</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKN1ZqZdFUnlQgzAwsbeevYTfi2GaAFoB0zj7GcPw9dVrKWA/viewform" class="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-[#F7F214] to-[#FFFA15] rounded-lg">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">7. Must have payment evidence</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">8. Must have identity photo</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                    </ol>
                    <p className='py-4 text-2xl font-bold text-red-500'>Fee</p>
                    <ol className='relative dark:border-gray-700'>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">Foreign student: US$ 400</p>
                        </li>
                        <li className='mb-4 ml-4'>
                            <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <p class="font-semibold text-gray-900 ">Indonesian student: Rp. 5.000.000,-</p>
                            {/* <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                        </li>
                    </ol>
                    <p className='pb-8'>Transfer to <span className='text-yellow-200 text-xl font-bold hover:border-b border-[#8C323E]'><a href='https://docs.google.com/document/d/1Y15zm-RiIBhTT320NYQyW4gf-PPV3V4P/edit?usp=share_link&ouid=112279601469461014351&rtpof=true&sd=true'>(see link in official statement letter)</a></span></p>
                    <p className='pb-2 lg:text-xl font-bold text-red-600'>* transfer fee, airfare, visa, meals accommodation are excluded</p>
                </div>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15]'>
                <Image className='rounded-xl' src={hotel} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Requirements