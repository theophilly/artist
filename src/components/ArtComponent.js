import React, { useState } from "react";
import RViewerJS from "viewerjs-react";
import "viewerjs-react/dist/index.css";

import "./styles/ArtComponent.css";

function ArtComponent({ art }) {
  const [mouseEntered, setMouseEntered] = useState(false);
  return (
    <div
      onMouseEnter={() => setMouseEntered(!mouseEntered)}
      onMouseLeave={() => setMouseEntered(!mouseEntered)}
      className="artImage"
    >
      <RViewerJS className="op">
        <img src={art.image} />
      </RViewerJS>

      {!mouseEntered ? (
        <>
          <div className="detailscontainer">
            <p>{art.title}</p>
            <span>{art.year}</span>
          </div>
          <div>
            <p> {art.medium}</p>
            <p> {art.dimemsion}</p>
          </div>
        </>
      ) : (
        <div className="checkFullSizeContainer">
          <span className="checkFullSize">See Full Size</span>
        </div>
      )}
    </div>
  );
}

export default ArtComponent;
