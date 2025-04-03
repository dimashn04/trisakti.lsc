import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/1Zvsg3M0n-o?si=Vt4vI8VjMAaWXFiM'
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/vbP18sIem98?si=hrIDQwYYhH_bCPi9'
    },
    {
        type: 'video',
        url: 'https://www.youtube.com/embed/Z3nBKz9chog?si=ln-5wGbRsKPUf93u'
    }
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
    <div id='videos' className='mt-96 pt-96 w-full h-screen justify-center'>
      <div className='max-w-[1240px] h-screen w-full m-auto py-8 px-4 relative group justify-center'>
        <p className='text-xl tracking-widest uppercase text-[#F7F214] font-bold'>VIDEO GALLERY</p>
        <p className='py-4 text-2xl font-bold text-red-500'>See Our Previous Summer Course Events</p>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-xl shadow-gray-400 ${
              slideIndex === currentIndex ? '' : 'hidden'
            }`}
            style={{ position: 'relative' }}
          >
            {slide.type === 'image' && (
              <img src={slide.url} alt='' className='w-full h-full object-cover' />
            )}
            {slide.type === 'video' && (
                <iframe className='w-full h-full object-cover'
                  src={slide.url} >
                </iframe>
            )}
          </div>
        ))}
        {/* Left Arrow */}
        <div
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#F7F214] text-black cursor-pointer'
        >
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div
          className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#F7F214] text-black cursor-pointer'
        >
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
