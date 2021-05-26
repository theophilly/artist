import React from 'react';
import './styles/ExhibitionSection.css';
import ExhibitionComponent from './ExhibitionComponent';
import { Link } from 'react-router-dom';
import ExhibitionList from './ExhibitionList';

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
        {[
          {
            title: 'Mbari Mbayo”, Nike Gallery/US Embassy, Lagos',
            year: '2009',
          },
          {
            title: 'Obafemi Awolowo University, Ile-Ife, Nigeria',
            year: '1998',
          },
          {
            title: 'Art Bazaar”, Dakart, Biennial Art Festival, Dakar, Senegal',
            year: '2004',
          },
          {
            title: 'Baa Ruu Waa Artistry", Pan-African University, Lagos',
            year: '2015',
          },
        ].map((item) => (
          <ExhibitionList {...item} />
        ))}
      </div>
    </div>
  );
}

export default ExhibitionSection;
