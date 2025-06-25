import React from 'react';
import './Projects.css';

const Project = ({ title, description, image, reverse }) => {
  return (
    <div className={`project ${reverse ? 'reverse' : ''}`}>
      <div className="project-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Project;
