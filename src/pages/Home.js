import React from 'react';
import AboutSection from '../components/AboutSection';
import HomeListings from '../components/HomeListings';
import ExhibitionSection from '../components/ExhibitionSection';
import ProfileSection from '../components/ProfileSection';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from './Layout';

function Home(props) {
  return (
    <Layout>
      <div>
        <Hero />
        {/* <AboutSection />
        <HomeListings />
        <ExhibitionSection />
        <ProfileSection /> */}
        <Footer></Footer>
      </div>
    </Layout>
  );
}

export default Home;
