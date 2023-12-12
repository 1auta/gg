"use client";
import { useState } from "react";
import slide1 from "./static/slide1.png";
import slide2 from "./static/slide2.png";
import slide3 from "./static/slide3.png";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const images = [
    {
      src: slide1.src,
      alt: 'Slide 1',
      width: activeIndex === 0 ? 200 : 150,
      height: activeIndex === 0 ? 300 : 250,
    },
    {
      src: slide2.src,
      alt: 'Slide 2',
      width: activeIndex === 1 ? 200 : 150,
      height: activeIndex === 1 ? 300 : 250,
    },
    {
      src: slide3.src,
      alt: 'Slide 3',
      width: activeIndex === 2 ? 200 : 150,
      height: activeIndex === 2 ? 300 : 250,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-36">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mx-3 ${index !== 0 ? 'ml-30' : ''}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-${image.width} h-${image.height} cursor-pointer transition-transform duration-300 transform ${
              activeIndex === index ? 'scale-125' : 'scale-100'
            }`}
            onClick={() => handleImageClick(index)}
            width={image.width}
            height={image.height}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;