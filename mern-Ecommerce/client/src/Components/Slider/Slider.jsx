import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import "./Slider.scss";

const data = [
  "https://images.pexels.com/photos/1361907/pexels-photo-1361907.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/65406/pexels-photo-65406.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 6 ? 0 : (current) => current + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 6 : (prev) => prev - 1);
  };

 

  return (
    <>
      <div className="slider">
        <div
          className="container"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <img src={data[0]} alt="iPad-is-everything-you-need" />
          <img src={data[1]} alt="iPad" />
          <img src={data[2]} alt="makeup-kits" />
          <img src={data[3]} alt="louis-vuitton-bags" />
          <img src={data[4]} alt="Sunglasses" />
          <img src={data[5]} alt="casual-shoes" />
          <img src={data[6]} alt="jewellery" />
        </div>
        <div className="icons">
          <div className="icon" onClick={prevSlide}>
            <ArrowBackOutlinedIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <ArrowForwardOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
