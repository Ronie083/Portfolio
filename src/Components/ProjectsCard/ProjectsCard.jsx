import { useState } from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ name, features, image }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={`w-96 bg-base-100 shadow-xl my-10 rounded-md`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-wrapper">
        <figure style={{ height: '300px', overflow: 'hidden' }}>
          <img src={image} alt="image" />
        </figure>
      </div>
      <div className={`card-body ${hovered ? 'hovered' : ''}`}>
        <h2 className="card-title">
          {name}
        </h2>
        <div className="projects-info">
          <p className="my-3">{features}</p>
          <div className="card-actions justify-end">
            <a className="badge badge-outline">Live Link</a>
            <a className="badge badge-outline">Code Link</a>
          </div>
        </div>
      </div>
      <div className="card-actions m-10">
        <button className='btn btn-primary'>Full Details</button>
      </div>
    </div>
  );
};

export default ProjectsCard;
