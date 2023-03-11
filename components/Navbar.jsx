import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Logo from '../public/assets/logoAll.png'
import CB from '../public/assets/navLogo.png'
import LogoFH from '../public/assets/logo.png'
import LogoYSU from '../public/assets/YSU.png'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineGlobal} from 'react-icons/ai'
import { FaWhatsapp, FaWhatsappSquare, FaInstagram } from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }

        window.addEventListener('scroll', handleShadow);
    }, [])

  return (
    // fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-[#ecf0f3]
    <div style={{backgroundColor: '#ecf0f3'}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'><Image src={Logo} alt="/" width="250" height="50" /></Link>
            <div>
                <ul className='hidden md:flex'>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/#about'>About</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/#venue'>Venue</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/#timeline'>Timeline</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/#activities'>Courses</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/#attractions'>Attractions</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/#requirements'>Requirements & Registration</Link>
                    </li>
                    <li className='ml-10 text-sm uppercase hover:border-b border-orange-300'>
                        <Link href='/#contact'>Contact</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
            <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'><Image src={Logo} width="150" height="35" alt="/"/></Link>  
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-orange-600 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's study and have fun with the summer course</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><Link href="/">Home</Link></li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><Link href="/#about">About</Link></li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><Link href="/#venue">Venue</Link></li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><Link href="/#timeline">Timeline</Link></li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><Link href="/#activities">Courses</Link></li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><Link href="/#attractions">Attractions</Link></li>
                        <li onClick={()=> setNav(false)} className='py-4 text-sm'><Link href="/#requirements">Requirements & Registration</Link></li>
                    </ul>
                    <div className='pt-10'>
                        <p className='uppercase tracking-widest text-orange-600'><Link onClick={()=> setNav(false)} href='/#contact'>Contact Us</Link></p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a href='https://wa.me/6282299058989'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaWhatsapp />
                            </div>
                            </a>
                            <a href='https://wa.me/6281510071592'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaWhatsappSquare />
                            </div>
                            </a>
                            <a href='https://instagram.com/fhtrisakti_official?igshid=YmMyMTA2M2Y='>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaInstagram />
                            </div>
                            </a>
                            <a href='mailto:trisakti.lsc@gmail.com?subject=subject text'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            </a>
                            <a href='https://fh.trisakti.ac.id/'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineGlobal />
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar