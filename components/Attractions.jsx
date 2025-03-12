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
            <p className='text-xl tracking-widest uppercase text-[#F7F214] font-bold'>Attractions</p>
            <p className='py-4 text-2xl font-bold text-red-500'>Visit Awesome Attractions</p>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#F7F214] to-[#FFFA15]'>
                    <img className='rounded-xl group-hover:opacity-10' src="https://awsimages.detik.net.id/community/media/visual/2021/09/08/desa-panglipuran-bali_169.jpeg?w=1200" alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Penglipuran Village is one of the traditional <br/> villages in Bali that is famous for its beauty and beauty. <br/> Located in Bangli Regency, the village is known for its neat layout, <br/> preserved culture, and clean environment. <br/> In fact, Penglipuran is often included in the list of the cleanest <br/> villages in the world.</p>
                        <p className='text-xl font-bold'>Penglipuran Village</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#F7F214] to-[#FFFA15]'>
                    <img className='rounded-xl group-hover:opacity-10' src="https://cdn-ilcdcbj.nitrocdn.com/kWFCODXykNrdJKhMaUWBaMOBaUxbWXpQ/assets/images/optimized/rev-63831c3/jatiluwih.id/wp-content/uploads/2024/07/wanderers-warriors-charlie-lauren-about-us-jatiluwih-rice-terraces-bali-indonesia-1440x960.jpg-1.webp" alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Jatiluwih Village is a tourist village in Tabanan Regency, Bali,<br/> famous for its spectacular views of terraced rice fields.<br/> The village is located at an altitude<br/> of about 700 meters above sea level, so the air is cool and fresh.</p>
                        <p className='text-xl font-bold'>Jatiwulih Village</p>
                    </div>
                </div>
                {/* <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <Image className='rounded-xl group-hover:opacity-10' src={kr} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Visit the official palace of Ngayogyakarta Hadiningrat Sultanate <br/>which is now located in Yogyakarta City. </p>
                        <p className='text-xl font-bold'>Batik Museum</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <Image className='rounded-xl group-hover:opacity-10' src={ws} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Located near the Kraton, this place was also known as <br/> the garden for the Sultan of Yogyakarta. </p>
                        <p className='text-xl font-bold'>Water Castle</p>
                    </div>
                </div>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#F7F214] to-[#FFFA15] '>
                    <Image className='rounded-xl group-hover:opacity-10' src={merapi} alt='/' />
                    <div className='hidden group-hover:block absolute'>
                        <p>Witness In-person Events Majestic Mt. Merapi Volcano at the Center of Java </p>
                        <p className='text-xl font-bold'>Volcano Mountains - Merapi</p>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Attractions