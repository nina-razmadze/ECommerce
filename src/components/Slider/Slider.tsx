import { useState } from 'react';
import {
  SHomeContent,
  SBsChevronCompactLeft,
  SBsChevronCompactRight,
  SfourDotsWrapper,
  SfourDots,
} from './SSlider.styled';

import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(2);

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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1589796411951-22afd4d68b2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80',
      // title: 1,
    },

    {
      url: 'https://rare-gallery.com/mocahbig/396852-wallpaper-matrix-code-binary-4k-hd.jpg',
    },
    {
      url: 'https://w0.peakpx.com/wallpaper/909/704/HD-wallpaper-keyboard-backlight-purple.jpg',
    },
    {
      url: 'https://images.unsplash.com/photo-1540815435778-aa03acf4bcbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80',
    },
    {
      url: 'https://c8.alamy.com/comp/J9Y929/binary-matrix-computer-data-code-seamless-background-binary-code-for-J9Y929.jpg',
    },

    {
      url: 'https://images.pond5.com/4k-matrix-style-binary-codeseamless-088649879_prevstill.jpeg',
    },
  ];
  return (
    <>
      <SHomeContent
        style={{ background: `url(${slides[currentIndex].url})`, height: 500 }}
      >
        <SBsChevronCompactLeft className='hidden'>
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </SBsChevronCompactLeft>

        <SBsChevronCompactRight className='hidden'>
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </SBsChevronCompactRight>

        <SfourDotsWrapper>
          {slides.map((slide, slideIndex) => (
            <SfourDots key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <RxDotFilled
                size={30}
                color={currentIndex === slideIndex ? 'white' : 'gray'}
              />
            </SfourDots>
          ))}
        </SfourDotsWrapper>
      </SHomeContent>
    </>
  );
}
