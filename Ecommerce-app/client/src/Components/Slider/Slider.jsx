import React , {useState} from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import "./Slider.scss";
const Slider = () => {
  const [currentSlide , setCurrentSlide]=useState(0);
  const data = [
    "https://images.pexels.com/photos/1110355/pexels-photo-1110355.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1327689/pexels-photo-1327689.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4276653/pexels-photo-4276653.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/894077/pexels-photo-894077.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/5560083/pexels-photo-5560083.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

const nextSlide=()=>{
 setCurrentSlide(currentSlide===5 ? 0 :(current)=>current+1)
}
const prevSlide=()=>{
setCurrentSlide(currentSlide===0?5:(prev)=>prev-1)
}
  return (
    <>
      <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
          <img src={data[0]} alt="Kindle-and-other-notepads" />
          <img src={data[1]} alt="makeup-essentials" />
          <img src={data[2]} alt="branded-bags" />
          <img src={data[3]} alt="Sunglasses" />
          <img src={data[4]} alt="casual-shoes" />
          <img src={data[5]} alt="kids-fashion" />
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
