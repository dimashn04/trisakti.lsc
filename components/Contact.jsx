import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineGlobal} from 'react-icons/ai'
import { FaWhatsapp, FaWhatsappSquare, FaInstagram } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='pt-80 w-full lg:h-screen'>
        <div id='contact' className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-orange-600 font-bold'>Contact</p>
            <p className='py-4 text-2xl font-bold'>Get In Touch</p>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl px-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwdHlwaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='/' />
                        </div>
                        <div>
                            <p className='py-2 font-bold uppercase text-orange-600'>indonesia - south korea</p>
                            <p className='text-xl font-bold uppercase'>summer course<br/>global legal issues</p>
                        </div>
                        <div>
                            <p className='pt-20'>Feel Free to Contact Us</p>
                            <div className='flex items-center justify-between py-4'>
                                <a href='https://wa.me/6282299058989'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaWhatsapp />
                                </div>
                                </a>
                                <a href='https://wa.me/6281510071592'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaWhatsappSquare />
                                </div>
                                </a>
                                <a href='https://instagram.com/trisakti.lsc?igshid=YmMyMTA2M2Y='>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaInstagram />
                                </div>
                                </a>
                                <a href='mailto:trisakti.lsc@gmail.com?subject=subject text'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                </a>
                                <a href='https://fh.trisakti.ac.id/'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineGlobal />
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form method='POST' action='https://getform.io/f/3872cb92-d204-42f2-9e89-8cdcb6c62b44'>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows={10} name='message'></textarea>
                            </div>
                            <button className='w-full p-4 mt-4'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='m-auto text-orange-600' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact