import React from 'react';
import './TeamSection.css';
import Team1 from '../../assets/images/team/1.jpg';
import Team2 from '../../assets/images/team/2.jpg';

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
  ];

  return (
    <div>
      <h2 className="team-header">Meet the Bosses</h2>
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
