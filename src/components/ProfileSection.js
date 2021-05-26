import React from 'react';
import './styles/ProfileSection.css';
import profile from './group.png';
import { Link } from 'react-router-dom';

function ProfileSection(props) {
  return (
    <div className="ProfileSection">
      <div className="innerSection">
        <hr></hr> A Word About My Art
      </div>
      <div className="profileContent">
        <div>
          <p>
            Akinjide Baruwa is a contemporary Nigerian artist living and working
            in Osogbo, Nigeria. He studied art at the Obafemi Awolowo University
            in Ile-Ife and his main medium is painting. His studio practice also
            includes various forms of textile dying and drawing on paper. In a
            process-oriented method Baruwa partly produces the pigments for his
            artwork by himself, based on the use of plants as herbal medicine in
            Yoruba culture. <br /> <br /> His work brings together local forms
            of artwork and a contemporary approach
          </p>
          <button>
            <Link to="/about">See Full Profile</Link>
          </button>
        </div>
        <div>{/* <img src={profile}></img> */}</div>
      </div>
    </div>
  );
}

export default ProfileSection;
