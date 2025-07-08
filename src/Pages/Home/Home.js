import React from 'react';
import SectionBelowNavbar from './SectionBelowNavbar';
import SectionTwo from './SectionTwo';
import SectionFour from './SectionFour';
import TeamSection from './TeamSection';

const Home = () => {
  return (
    <section className="home">
      <SectionBelowNavbar />
      <TeamSection />
      <SectionTwo />
      <SectionFour />
    </section>
  );
};

export default Home;
