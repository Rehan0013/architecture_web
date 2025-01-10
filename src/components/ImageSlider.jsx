import React, { useEffect, useState } from "react";
import slider from "../data";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {slider.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={slide.img} alt={`Slide ${index + 1}`} />
          <div className="text" >
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
      <div className="dots">
        {slider.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goTo(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
