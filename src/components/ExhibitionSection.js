import React from 'react';
import './styles/ExhibitionSection.css';
import ExhibitionComponent from './ExhibitionComponent';
import { Link } from 'react-router-dom';

function ExhibitionSection(props) {
  return (
    <div className="ExhibitionSection">
      <div className="firstSection">
        <div>
          <hr></hr> Exhibitions
        </div>
        <p className="pExhibition">
          Exhibitions I have had the honor to attend in my artistic journey
        </p>
        <button>
          <Link to="/about">See All Exhibitions</Link>
        </button>
      </div>
      <div className="secondSection">
        {/* <ExhibitionComponent />
        <ExhibitionComponent />
        <ExhibitionComponent />
        <ExhibitionComponent /> */}
      </div>
    </div>
  );
}

export default ExhibitionSection;
