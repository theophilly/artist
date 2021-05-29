import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import './ArchivePage.css';

import AvailableWorks from '../components/AvailableWorks';
import Layout from './Layout';
import { arts } from '../arts';

function ArchivePage(props) {
  const { pathname } = useLocation();
  const [works, setWorks] = useState(arts);
  const [details, setDetails] = useState('Available Works');
  const [info, setInfo] = useState(
    'Quisque volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse urna nibh, nean dignissim felis. .'
  );

  const secondDetails = [
    'Quisque volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse urna nibh, nean dignissim felis. .',
    'second volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse urna nibh, nean dignissim felis. .',
    'Third volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse urna nibh, nean dignissim felis. . ',
    'fourth Quisque volutpat mattis am. Nullam malesuada erat ut turpis. Suspendisse urna nibh, nean dignissim felis. . ',
  ];

  const filterData = (category) => {
    setWorks(arts.filter((value) => value.status === category));
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
    return Object.keys(arts.filter((value) => value.status === category))
      .length;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Layout>
      <div className="ArchivePage">
        <div className="categoriesPart">
          <h2>Categories</h2>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Available Works')}>Available Works</p>
            <span>({getItemCount('Available Works')})</span>
          </div>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Sold Work')}>Sold Works</p>
            <span>({getItemCount('Sold Work')})</span>
          </div>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Works in Progress')}>
              Works in Progress
            </p>
            <span>({getItemCount('Works in Progress')})</span>
          </div>
          <div className="categoriesGrouping">
            <p onClick={() => filterData('Featured Artiste')}>
              Featured Artiste
            </p>
            <span>({getItemCount('Featured Artiste')})</span>
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
