import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ArchivePage.css';

import AvailableWorks from '../components/AvailableWorks';
import Layout from './Layout';

function ArchivePage(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Layout>
      <div className="ArchivePage">
        <div className="categoriesPart">
          <h2>Categories</h2>
          <div className="categoriesGrouping">
            <p>Available Works</p> <span>(4)</span>
          </div>
          <div className="categoriesGrouping">
            <p>Sold Works</p> <span>(10)</span>
          </div>
          <div className="categoriesGrouping">
            <p>Works in Progress</p> <span>(2)</span>
          </div>
          <div className="categoriesGrouping">
            <p>Featured Artiste</p> <span>(5)</span>
          </div>
        </div>
        <div className="componentSection">
          <AvailableWorks></AvailableWorks>
        </div>
      </div>
    </Layout>
  );
}

export default ArchivePage;
