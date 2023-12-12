// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import slide1 from "./static/slide1.png";
// import slide2 from "./static/slide2.png";
// import slide3 from "./static/slide3.png";

// const Slider: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       content: "Перший слайд",
//       image: slide1,
//     },
//     {
//       id: 2,
//       content: "Другий слайд",
//       image: slide2,
//     },
//     {
//       id: 3,
//       content: "Третій слайд",
//       image: slide3,
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === slides.length - 1 ? 0 : prevSlide + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
//     );
//   };

//   return (
//     <div className="slider">
//       <button onClick={prevSlide}>Попередній слайд</button>
//       <div className="slide">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={
//               index === currentSlide ? "slide-active" : "slide-inactive"
//             }
//           >
//             <Image
//               src={slide.image}
//               alt={`Slide ${slide.id}`}
//               width={300}
//               height={100}
//             />{" "}
//             {/* Використання компонента Image */}
//             <p>{slide.content}</p>
//           </div>
//         ))}
//       </div>
//       <button onClick={nextSlide}>Наступний слайд</button>
//     </div>
//   );
// };

// export default Slider;
