import React from 'react';
import './TeamSection.css';
import Team1 from '../../assets/images/team/1.jpg';
import Team2 from '../../assets/images/team/2.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Daniel',
      description:
        "Daniel, the public face since 2015, is who you'll generally speak with about your wood. Daniel is a UK experienced carpenter and joiner and a long standing member of the local Woodworking Guild.",
      image: Team1,
    },
    {
      id: 2,
      name: 'Bongani',
      description:
        "Bongani started as a woodworker shortly after in 2018. Bongani has wide experience in forestry, sawmilling and associated skills. He is the unofficial 'glue guy.' He is one of the premier furniture wood-charring technicians in the country.",
      image: Team2,
    },
  ];

  return (
    <div>
      <h2 className="team-header">
        <mark>Meet the Team</mark>
      </h2>
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
