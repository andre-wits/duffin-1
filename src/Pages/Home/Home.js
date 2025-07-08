import React from 'react';
import SectionBelowNavbar from './SectionBelowNavbar';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import TeamSection from './TeamSection';

const Home = () => {
  return (
    <section className="home">
      <SectionBelowNavbar />
      <TeamSection />
      <SectionTwo />
      {/* <SectionThree /> */}
      <SectionFour />
    </section>
  );
};

export default Home;
