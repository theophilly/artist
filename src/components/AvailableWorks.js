import React from 'react';
import './styles/AvailableWorks.css';
import NewArt from './NewArt';

function AvailableWorks({ info, arts, details }) {
  return (
    <div className="AvailableWorks">
      <span>Archieve </span>
      <span> / {details === 'Sold Work' ? 'Unavailable Works' : details}</span>
      <h1>{details}</h1>
      <p>{info}</p>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {arts.map((art) => (
          //<ArtComponent art={art}></ArtComponent>
          <NewArt {...art}></NewArt>
        ))}
      </div>
    </div>
  );
}

export default AvailableWorks;
