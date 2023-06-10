import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              {" "}
              Find <br />
              Your Dream <br />
              Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              First Time Home Buyers - No Need to Pay Down Payemnt{" "}
            </span>
            <span className="secondaryText">
              Your Dream House is Just 3 Clicks away{" "}
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={32} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Award Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x: '7rem', opacity:0}}
          animate={{x: 0, opacity: 1}}
          transition={{
            duration: 2,
            type: 'spring'
          }}
           className="image-container">
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
