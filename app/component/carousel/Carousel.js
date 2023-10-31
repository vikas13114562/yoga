"use client"; // This is a client component
import { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const quote = [
    {
      id: 1,
      text: "Yoga is the art of aligning body, mind, and spirit; a path to inner peace and radiant health.",
      author: "T.K.V. Desikachar",
    },
    {
      id: 2,
      text: "Yoga is the journey of the self, through the self, to the self.",
      author: "The Bhagavad Gita",
    },
    {
      id: 3,
      text: "The nature of yoga is to shine the light of awareness into the darkest corners of the body.",
      author: "Jason Crandell",
    },
    {
      id: 4,
      text: "Yoga is not about touching your toes, it's about what you learn on the way down.",
      author: "Jigar Gor",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let num = currentSlide + 1;
      if (num >= 5) {
        setCurrentSlide(1);
      } else setCurrentSlide(num);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  const divStyle = {
    backgroundImage: `url('/caroselImg/carousel0${currentSlide}.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "400px", // Adjust the height as needed
  };

  return (<>
    <div style={{height:'65px'}}></div>
    <div className="container1" style={divStyle}>
      <div className="quote-container">
        <div>{quote[currentSlide - 1].text}</div>
        <div className="author">{quote[currentSlide - 1].author}</div>
      </div>
      <div className="dot-container">
        <div
          className="dot"
          style={{ backgroundColor: currentSlide === 1 ? "#C70039" : "" }}
        ></div>
        <div
          className="dot"
          style={{ backgroundColor: currentSlide === 2 ? "#EE9322" : "" }}
        ></div>
        <div
          className="dot"
          style={{ backgroundColor: currentSlide === 3 ? "#F4E869" : "" }}
        ></div>
        <div
          className="dot"
          style={{ backgroundColor: currentSlide === 4 ? "#E55604" : "" }}
        ></div>
      </div>
    </div>
    </>);
};

export default Carousel;
