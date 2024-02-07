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
                <p className='py-2 text-gray-700'>It's our third Trisakti Law Summer Course....... so exciting. Joining Trisakti law summer course is fun to study in holiday time. Get experience in a new country, culture, learn the legal system and basics of a new language, and of course gain friends from all over the world.</p>
                <p className='py-2 text-gray-700'>Earn benefits such as a souvenir bag which includes a notepad and a pen and also a certificate.</p>

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