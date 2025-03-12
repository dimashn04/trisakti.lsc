import React from 'react'

const Venue = () => {
  return (
    <div id='venue' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#F7F214] font-bold'>Venue</p>
                <p className='py-4 text-2xl font-bold text-red-500'>Visit Us</p>
                <p className='py-2 text-black'>Faculty Of Law, Universitas Trisakti<br/>A Campus, H Building<br/>Jl. Kyai Tapa 1, Grogol, West Jakarta<br/>Indonesia</p>
                <iframe className='py-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.717457340122!2d106.78867341439161!3d-6.1685762955340335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65cdd6bbf21%3A0xece4823f0d0c7a06!2sUniversitas%20Trisakti%20Kampus%20A%20Gedung%20H!5e0!3m2!1sen!2sid!4v1678461051183!5m2!1sen!2sid" width="400" height="400" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#F7F214] to-[#FFFA15]'>
                <img className='rounded-xl' src="https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/89585/original/biaya_kuliah_trisakti.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Venue