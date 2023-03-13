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
                <p className='py-2 text-blue-700 font-bold'>Free for the first 10 registrants from Youngsan University and Universitas Trisakti</p>

                <p className='py-4 cursor-pointer font-bold'><span className='hover:border-b border-orange-400'><Link href='/#event'>Check out all of the activities</Link></span></p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://i.imgur.com/eKKKWcg.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About