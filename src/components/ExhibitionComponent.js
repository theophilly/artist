import React from "react";
import lagos from "./lagos.jpg";
import "./styles/ExhibitionComponent.css";

function ExhibitionComponent(props) {
  return (
    <div className="ExhibitionComponent">
      <div className="ECOverlay">
        <div>
          <section style={{ display: "flex", alignItems: "center" }}>
            <i class="fas fa-map-marker-alt"></i>
            <p>Lagos</p>
          </section>
          <span>2020</span>
        </div>

        <p>Afas Art Exhibition, Ila-Orangun</p>
      </div>
      <img src={lagos}></img>
    </div>
  );
}

export default ExhibitionComponent;
