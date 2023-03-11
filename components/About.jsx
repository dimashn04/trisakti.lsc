import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-orange-600 font-bold'>About</p>
                <p className='py-4 text-2xl font-bold'>Join Us</p>
                <p className='py-2 text-gray-700'>Joining law summer course is a great way of studying. Know more about legal system, get experience a new country, culture, learn the basics of a new language, and of course gain friends from all over the world.</p>
                <p className='py-2 text-gray-700'>Earn benefits such as a souvenir bag which includes a notepad and a pen and also a certificate.</p>
                {/* <p className='py-4 text-2xl font-bold'>Visit Us</p>
                <iframe className='py-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.717457340122!2d106.78867341439161!3d-6.1685762955340335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65cdd6bbf21%3A0xece4823f0d0c7a06!2sUniversitas%20Trisakti%20Kampus%20A%20Gedung%20H!5e0!3m2!1sen!2sid!4v1678461051183!5m2!1sen!2sid" width="400" height="400" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                <p className='py-4 text-2xl font-bold'>Mark Your Calendar</p>
                <ol className='relative border-l border-orange-600 dark:border-gray-700'>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">26 June 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white">Registration starts</p>
                        <a href="https://forms.gle/L8mN4y4enAVmgPMfA" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Register now <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                    </li>
                    <li className='mb-4 ml-4'>
                        <div class="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-800">7 July 2023</time>
                        <p class="font-semibold text-gray-900 dark:text-white">Registration ends</p>
                    </li>
                </ol> */}


                <p className='py-4 cursor-pointer font-bold'><span className='hover:border-b border-orange-400'><Link href='/#activities'>Check out all of the activities</Link></span></p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://i.imgur.com/FnA51M7.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About