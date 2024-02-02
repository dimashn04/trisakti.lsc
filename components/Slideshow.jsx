import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: '/assets/all_0.jpg',
    },
    {
      url: 'https://i.imgur.com/6m9v59e.png',
    },
    {
      url: '/assets/all_5.jpg',
    },
    {
      url: '/assets/all_1.jpg',
    },
    {
      url: '/assets/all_2.jpg',
    },
    {
      url: '/assets/all_3.jpg',
    },
    {
      url: '/assets/all_4.jpg',
    },
    {
      url: 'https://i.imgur.com/OD38QV5.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div id='home' className='w-full h-screen pt-20 text-center justify-center'>
        <div className='max-w-[1240px] h-screen w-full m-auto py-8 px-4 relative group justify-center'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-xl shadow-gray-400'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#EFE6A5] text-[#8C323E] cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#EFE6A5] text-[#8C323E] cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl py-4 cursor-pointer'
                >
                    <RxDotFilled />
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;