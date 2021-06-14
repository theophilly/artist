import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { init } from 'ityped';

function Hero(props) {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      startDelay: 0,
      strings: [
        'Baa Ruu Waa Artistry is offshoot of Mbari Mbayo Art Movement, that is notable for the  revival of the mind and a re-dedication to the culture in which one belongs...',
      ],
    });
  }, []);

  return (
    <>
      <div className="head"></div>
      <div className="hero">
        <div className="overlay"></div>
        <div className="hero-container">
          <div></div>
          <div>
            <p ref={textRef} className="aboutArtiste"></p>
            {/* <motion.p
              ref={textRef}
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring' }}
              className="aboutArtiste"
            >
              <span style={{ color: 'turquoise' }}>Baa Ruu Waa Artistry</span> is offshoot of Mbari Mbayo Art Movement, that is notable for the  revival of the mind and a re-dedication to the culture in which one belongs...
            </motion.p> */}
            {/* <Link className="l" to="/archive">
              <Button colorScheme="blue" rightIcon={<FaArrowRight />}>
                see all arts
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
