import React from 'react'
import Link from 'next/link'

const Event = () => {
  return (
    <div id='event' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-'>
                <p className='uppercase text-xl tracking-widest text-orange-600 font-bold'>Activities</p>
                <p className='py-4 text-2xl font-bold'>See Our Program Timeline</p>
                {/* TODO */}
                <div className='overflow-x-scroll'>
                    
                </div>
            </div>
            
            {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://media.istockphoto.com/id/612235546/photo/calendar.jpg?s=170667a&w=0&k=20&c=pZGUy-yy36MhqzTgOyQnQ6oHpuMqFq1k7uznlbCnH2o=" alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default Event