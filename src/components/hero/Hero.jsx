import React from "react";
import Header from "../header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
    
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shap </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/*figures  */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero button */}
        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>
        <div className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate </span>
          <span>116 bpm </span>
        </div>
    {/*  */}
    {/* hero images */}
    <img src={hero_image} alt="hero-img" className="hero_image"/>
    <img src={hero_image_back } alt="hero-img" className="hero_image_back"/>
          {/*calories  */}
          <div className="calories">
            <img src={calories} alt=""/>
           <div>
           <span>Calories Burned</span>
            <span>220 kcal</span>
           </div>
            
          </div>
    </div>
    </div>
  );
};

export default Hero;
