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
    autoplaySpeed:3000,
  };

  return (
    <div className="w-full max-w-full mx-auto mt-0 mb-8">
      {/* mt-0 elimina el margen superior */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-96">
            {/* h-40 establece una altura máxima de 10cm (40px a la altura predeterminada de 4) */}
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            {/* La clase object-cover ajusta la imagen para que cubra completamente su contenedor */}
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ImageCarousel;
