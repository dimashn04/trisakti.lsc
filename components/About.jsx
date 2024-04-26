import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Lsc from '../public/assets/lsc.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#8C323E] font-bold'>About</p>
                <p className='py-4 text-2xl font-bold text-[#574821]'>Join Us</p>
                <p className='py-2 text-gray-700'>It&apos;s our third Trisakti Law Summer Course....... so exciting. Joining Trisakti law summer course is fun to study in holiday time. Get experience in a new country, culture, learn the legal system and basics of a new language, and of course gain friends from all over the world.</p>
                <p className='py-2 text-gray-700'>Earn benefits such as grade connversions, a souvenir bag and also a certificate.</p>
                <a href="https://drive.google.com/file/d/1sRPOcfWQKXoBToGaVYN5k9MftHVjbWl3/view?usp=sharing" class="inline-flex items-center px-4 py-2 text-sm font-medium text-[#EFE6A5] bg-gradient-to-r from-[#8C323E] to-[#A33A48] border-gray-200 rounded-lg hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                  Download the brochure here
                  <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                <p className='py-4 cursor-pointer font-bold text-[#574821]'><span className='hover:border-b border-[#8C323E]'><Link href='/#timeline'>Click here to check out the timeline</Link></span></p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#8C323E] to-[#A33A48]'>
                <Image className='rounded-xl' src={Lsc} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About