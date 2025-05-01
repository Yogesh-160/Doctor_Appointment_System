import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At YugVeda Super Speciality Hospital, we are a beacon of hope and healing, driven by a passion for transforming lives through exceptional healthcare. Established with a vision to set new standards in medical excellence, our state-of-the-art facility brings together cutting-edge technology, world-class expertise, and a deep commitment to compassionate care.
          </p>
          <p>
            Our team comprises highly skilled doctors, dedicated nurses, and specialized healthcare professionals who work tirelessly to ensure every patient receives personalized attention. We believe in treating the individual, not just the condition, fostering a holistic approach that nurtures both body and mind.
          </p>
          <p>Rooted in the values of integrity, empathy, and innovation, YugVeda is more than a hospital—it’s a trusted partner in your journey to wellness. Whether it’s advanced diagnostics, specialized treatments, or preventive care, we are here to guide you every step of the way, ensuring a healthier, brighter tomorrow.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
