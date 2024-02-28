import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-full mx-auto mt-0 mb-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-96">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>
      
      <style jsx>{`
        // .slick-dots {
        //   background-color: rgb(236 252 203); /* Cambia el color al que desees */
        //   padding: 5px 0; /* Agrega un espacio alrededor de los puntos */
        // }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
