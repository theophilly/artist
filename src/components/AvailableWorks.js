import React from 'react';
import './styles/AvailableWorks.css';
import NewArt from './NewArt';

function AvailableWorks({ info, arts, details }) {
  return (
    <div className="AvailableWorks">
      <span>Archive </span>
      <span> / {details}</span>
      <h1>{details}</h1>
      <p>{info}</p>
      <div className="AvailableWorks_inner">
        {arts.map((art) => (
          // <ArtComponent art={art}></ArtComponent>
          <NewArt {...art}></NewArt>
        ))}
      </div>
    </div>
  );
}

export default AvailableWorks;
