import React from 'react';
import "./insta.css"; // Create a CSS file for styling
import Image from 'next/image';

function ImageCarousel({ images }) {
  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        {images.map((ele, index) => (
          <div className="image-container" key={index}>
            <Image src={`/insta/0${ele}.jpg`} alt={`Image ${index + 1}`}
                width={300} height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
