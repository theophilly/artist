import React from 'react';
import './styles/AvailableWorks.css';
import NewArt from './NewArt';

function AvailableWorks({ arts }) {
  return (
    <div className="AvailableWorks">
      <span>Home </span>
      <span>/ Available Works</span>
      <h1>Available Works</h1>
      <p>
        Quisque volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse
        urna nibh, nean dignissim felis. Lorem ipsum dolor sit amet,
        consectetuer adipiscing donec odio.
      </p>
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
          // <ArtComponent art={art}></ArtComponent>
          <NewArt {...art}></NewArt>
        ))}
      </div>
    </div>
  );
}

export default AvailableWorks;
