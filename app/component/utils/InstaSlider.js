import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InstaCarousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="/image1.jpg" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="/image2.jpg" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="/image3.jpg" alt="Image 3" />
        </div>
        {/* Add more carousel items as needed */}
      </Slider>
    </div>
  );
};

export default InstaCarousel;
