import Image from 'next/image'
import React from 'react'
import merapi from '../public/assets/merapi.jpg'
import cb from '../public/assets/Pradaksina.jpg'
import pb from '../public/assets/prambanan.jpg'
import kr from '../public/assets/Keraton.png'
import ws from '../public/assets/ws.jpg'

const Attractions = () => {
  return (
    <div id='attractions' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 pt-16'>
            <p className='text-xl tracking-widest uppercase text-[#8C323E] font-bold'>Attractions</p>
            <p className='py-4 text-2xl font-bold text-[#574821]'>Visit Awesome Attractions</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={cb} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>9th-century Mahayana Buddhist temple in Magelang Regency,<br/> not far from the city of Magelang and the town of Muntilan,<br/> in Central Java, Indonesia.</p>
                        <p className='text-xl font-bold'>Borobudur Temple</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={pb} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Witness a performance that combines dance and drama <br/> without dialogue, based on the Ramayana and performed <br/> near Prambanan Temple on the island of Java, Indonesia.</p>
                        <p className='text-xl font-bold'>Ramayana Ballet at Prambanan Temple</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={kr} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Visit the official palace of Ngayogyakarta Hadiningrat Sultanate <br/>which is now located in Yogyakarta City. </p>
                        <p className='text-xl font-bold'>Batik Museum</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={ws} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Located near the Kraton, this place was also known as <br/> the garden for the Sultan of Yogyakarta. </p>
                        <p className='text-xl font-bold'>Water Castle</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#8C323E] to-[#DB4E61] text-[#EFE6A5]'>
                    <Image className='rounded-xl group-hover:opacity-10' src={merapi} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Witness In-person Events Majestic Mt. Merapi Volcano at the Center of Java </p>
                        <p className='text-xl font-bold'>Volcano Mountains - Merapi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attractions