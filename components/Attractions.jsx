import Image from 'next/image'
import React from 'react'
import monas from '../public/assets/monas.jpg'
import tmii from '../public/assets/tmii.jpg'
import batik from '../public/assets/batik.jpg'
import kaa from '../public/assets/kaa.jpg'

const Attractions = () => {
  return (
    <div id='attractions' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-orange-600 font-bold'>Attractions</p>
            <p className='py-4 text-2xl font-bold'>Visit Awesome Attractions</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-orange-600 to-orange-300'>
                    <Image className='rounded-xl group-hover:opacity-10' src={monas} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Commemorate Indonesia's independence</p>
                        <p className='text-xl font-bold'>National Monument</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-orange-600 to-orange-300'>
                    <Image className='rounded-xl group-hover:opacity-10' src={tmii} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Colorful diversity of Indonesian culture </p>
                        <p className='text-xl font-bold'>Taman Mini Indonesia Indah</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-orange-600 to-orange-300'>
                    <Image className='rounded-xl group-hover:opacity-10' src={batik} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        {/* <p>Colorful diversity of Indonesian culture </p> */}
                        <p className='text-xl font-bold'>Batik Museum</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-orange-600 to-orange-300'>
                    <Image className='rounded-xl group-hover:opacity-10' src={kaa} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>A place where the history of the Asian-African was raised,<br/>and enforced for the sake of a better future</p>
                        <p className='text-xl font-bold'>Asia Africa Conference<br/>Museum, Bandung</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attractions