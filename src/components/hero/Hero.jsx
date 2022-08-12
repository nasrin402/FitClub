import React from "react";
import Header from "../header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import CountUp from 'react-countup';
const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true: false;
  const transition = {type:"spring", duration:3}
  return (
    <div className="hero" id="home">
    <div className="blur hero-blur">
      
    </div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div 
          initial={{left: mobile? '165px' : '238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition, type:'tween'}}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
    
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
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
            
            <CountUp  start={100} end={140} delay={0}  prefix="+ " >
            {({ countUpRef }) => (
              
                <span ref={countUpRef} />
            
            )}</CountUp>
         
            <span>expert coaches</span>
          </div>
          <div>
          <CountUp  start={900} end={978} delay={0}  prefix="+ " >
          {({ countUpRef }) => (
            
              <span ref={countUpRef} />
          
          )}</CountUp>
            
            <span>members joined</span>
          </div>
          <div>
          <CountUp  start={0} end={50} delay={0}  prefix="+ " >
          {({ countUpRef }) => (
            
              <span ref={countUpRef} />
          
          )}</CountUp>
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
        <motion.div
        initial={{right:"-1rem"}}
        whileInView={{right:"8rem"}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate </span>
          <span>116 bpm </span>
        </motion.div>
    {/*  */}
    {/* hero images */}
    <img src={hero_image} alt="hero-img" className="hero_image"/>
    <motion.img 
    initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
    src={hero_image_back } alt="hero-img" className="hero_image_back"/>
          {/*calories  */}
          <motion.div
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition} className="calories">
            <img src={calories} alt=""/>
           <div>
           <span>Calories Burned</span>
            <span>220 kcal</span>
           </div>
            
          </motion.div>
    </div>
    </div>
  );
};

export default Hero;
