import React from 'react';
import './TeamSection.css';
import Team1 from '../../assets/images/team/1.jpg';
import Team2 from '../../assets/images/team/2.jpg';
import Team3 from '../../assets/images/team/3.jpg';
import Team4 from '../../assets/images/team/4.jpg';
import Team5 from '../../assets/images/team/5.jpg';
import Team6 from '../../assets/images/team/6.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Graham Taglang',
      description:
        "Graham, the public face of Parkman since 2015, is who you'll generally speak with about your custom furniture. The native Marylander is certainly busy guiding the ship, but he always makes plenty of time for his new family, cycling and the ever-hapless Washington Football Team.",
      image: Team1,
    },
    {
      id: 2,
      name: 'Kyle Jordan',
      description:
        "Kyle started as a woodworker with Parkman shortly after arriving from Iowa in 2018. A prodigious skateboard videographer, he's now our woodshop manager, photographer and unofficial 'glue guy.' He is one of the premier furniture wood-charring technicians in the country.",
      image: Team2,
    },
    {
      id: 3,
      name: 'Jimmy Welsh',
      description:
        "Jimmy began welding with Parkman in 2019 and immediately elevated the company's ironworking capabilities. The Massachusetts polymath splits his time as our lead designer and engineer between releasing albums, publishing comics and mastering the Marvel Universe.",
      image: Team3,
    },
    {
      id: 4,
      name: 'Susannah Rea-Downing',
      description:
        "Susannah, who first pulled her bike up to Parkman in 2019, is a purist wood virtuoso from NorCal who spends her summers creating sculptures from fallen trees, such as her seminal chainlink series. She's also recently begun to sell her stunning creations on The Gram.",
      image: Team5,
    },
    {
      id: 5,
      name: 'Preston Weimer',
      description:
        "Joining the team in 2020 after studying horticulture at UCLA, Preston quickly advanced Parkman's woodworking standards and catalogue of wood furniture. The Iowa-bred iron man/anarchist/skateboarder is the sharpest wit on our otherwise formidable team.",
      image: Team4,
    },
    {
      id: 6,
      name: 'Randy Zamudio',
      description:
        "Since joining in early 2022, Randy has seriously elevated Parkman's party quotient. Now serving as our cabinet and drawer maestro, the Boyle Heights man-about-town also has his own shop, Daddies Wood, which is catching fire and will surely rival our own soon enough.",
      image: Team6,
    },
  ];

  return (
    <div>
      <h2 className="team-header">Meet Our Team</h2>
      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <React.Fragment key={member.id}>
              {/* Image Column */}
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
              </div>

              {/* Text Column */}
              <div className="team-text-container">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-description">{member.description}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
