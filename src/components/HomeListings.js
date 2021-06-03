import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/HomeListings.css';
import ArtComponent from './ArtComponent';
import { Link } from 'react-router-dom';
import { arts } from '../arts';
import sanityClient from '../client';
import NewArt from './NewArt';

function HomeListings(props) {
  const { pathname } = useLocation();
  const [works, setWorks] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    sanityClient
      .fetch(
        `*[_type == "arts"]{
          title,
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          medium,
          dimension,
          year,
          status
      }`
      )
      .then((data) => {
        setWorks(data);
      })
      .catch(console.error);
  }, [pathname]);
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
        {works.map((art) => (
          // <ArtComponent art={art}></ArtComponent>
          <NewArt {...art}></NewArt>
        ))}
      </div>
    </div>
  );
}

export default HomeListings;
