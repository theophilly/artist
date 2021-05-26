import React from 'react';
import './styles/Footer.css';

function Footer(props) {
  return (
    <>
      <footer className="foot">
        <div>
          <div className="log">
            <span>BAARUUWAA</span>
            <span>ARTISTRY</span>
          </div>

          <div>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <div>
          <p>CONTACT INFO</p>
          <p>
            <i class="fas fa-map-marker-alt"></i>30 Ibokun Road, Osogbo, Osun
            State, Nigeria
          </p>
          <p>
            <i class="fas fa-phone-alt"></i>+234 70 38898581
          </p>
          <p>
            <i class="fas fa-envelope"></i>akinbaruwa@gmail.com
          </p>
        </div>
        <div>
          <p> QUICK LINKS</p>
          <ul>
            <li>About</li>
            <li>Exhibitions</li>
            <li>Gallery</li>
            <li>Awards</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
