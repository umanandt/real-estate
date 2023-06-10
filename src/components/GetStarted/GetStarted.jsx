import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quites from us
            <br />
            Your Dream Home is Just One Click Away
          </span>

          <button className="button">
            <a href='mailto:umanandblog@gmail.com'>Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
