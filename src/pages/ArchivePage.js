import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import './ArchivePage.css';

import AvailableWorks from '../components/AvailableWorks';
import Layout from './Layout';
import { arts } from '../arts';
import sanityClient from '../client';

function ArchivePage(props) {
  const { pathname } = useLocation();
  const [works, setWorks] = useState([]);
  const [allworks, setAllWorks] = useState([]);
  const [details, setDetails] = useState('Available Works');
  const [info, setInfo] = useState(
    'Quisque volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse urna nibh, nean dignissim felis. .'
  );

  const secondDetails = [
    '',
    '',
    '',
    'fourth Quisque volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse urna nibh, nean dignissim felis. . ',
  ];

  const filterData = (category, works = [...allworks]) => {
    setWorks(works.filter((value) => value.status === category));
    scroll.scrollToTop({ duration: 1500 });
    setDetails(category);
    if (category === 'Available Works') {
      setInfo(secondDetails[0]);
    } else if (category === 'Sold Work') {
      setInfo(secondDetails[1]);
    } else if (category === 'Works in Progress') {
      setInfo(secondDetails[2]);
    } else if (category === 'Featured Artiste') {
      setInfo(secondDetails[3]);
    }
  };
  const getItemCount = (category) => {
    return Object.keys(allworks.filter((value) => value.status === category))
      .length;
  };

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
        setAllWorks(data);
      })
      .catch(console.error);
  }, [pathname]);

  console.log(works);
  return (
    <Layout>
      <div className="ArchivePage">
        <div className="categoriesPart">
          <h2>Categories</h2>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Available')}>Available</p>
            <span>({getItemCount('Available')})</span>
          </div>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Unavailable')}>Unavailable</p>
            <span>({getItemCount('Unavailable')})</span>
          </div>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Works in Progress')}>
              Works in Progress
            </p>
            <span>({getItemCount('Works in Progress')})</span>
          </div>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Featured Artist')}>Featured Artist</p>
            <span>({getItemCount('Featured Artist')})</span>
          </div>
        </div>
        <div className="componentSection">
          <AvailableWorks
            info={info}
            details={details}
            arts={works}
          ></AvailableWorks>
        </div>
      </div>
    </Layout>
  );
}

export default ArchivePage;
