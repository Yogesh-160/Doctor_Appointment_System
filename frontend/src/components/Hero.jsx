import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Welcome to YugVeda Super Speciality Hospital, where world-class
            healthcare meets heartfelt compassion. Our cutting-edge facility is
            dedicated to delivering exceptional medical care, tailored to your
            unique needs. With a team of highly skilled doctors, nurses, and
            specialists, we provide personalized treatment plans that prioritize
            your health and well-being.
          </p>
          <p>
            At YugVeda, we combine advanced medical technology with a
            patient-first approach, ensuring precise diagnoses and effective
            treatments. From routine check-ups to complex procedures, our
            comprehensive services cover every aspect of your wellness journey.
            We’re more than a hospital—we’re your partner in achieving lasting
            health and vitality.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
