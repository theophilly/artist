import React from 'react';
import './styles/HomeListings.css';
import ArtComponent from './ArtComponent';
import { Link } from 'react-router-dom';
import { arts } from '../arts';
import NewArt from './NewArt';

function HomeListings(props) {
  return (
    <div className="homeListing">
      <div className="recentWorks">
        <div className="msg">
          <p>My Recent Works</p>
          <p>Here is a collection of my works</p>
        </div>
        <button>
          <Link to="/archive">View All Works</Link>
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {arts.map((art) => (
          // <ArtComponent art={art}></ArtComponent>
          <NewArt {...art}></NewArt>
        ))}
      </div>
    </div>
  );
}

export default HomeListings;
