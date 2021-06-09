import React from 'react';

function Hero(props) {
  return (
    <>
      <div className="head"></div>
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-container">
          <p className="aboutArtiste">
            <span style={{ color: 'turquoise' }}>Baa Ruu Waa Artistry</span> is
            offshoot of Mbari Mbayo Art Movement, that is notable for the
            revival of the mind and a re-dedication to the culture in which one
            belongs...
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
