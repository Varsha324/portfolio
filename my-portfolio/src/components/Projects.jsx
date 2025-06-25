import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h1 >PROJECTS</h1>

      <Project
        title="External Event Management Portal"
        description="A dynamic and user-centric web application designed to streamline student event registration and assessment management.
               This portal enables students to seamlessly register for external events and Internal Review Assessments (IRAs) listed by the college. 
               Built with a responsive interface, it ensures smooth navigation and real-time interaction. 
               The platform incorporates an admin approval system, allowing administrators to review and validate student registrations, ensuring eligibility and compliance with institutional guidelines. 
               Designed for scalability and efficiency, the portal significantly simplifies coordination between students and academic staff."
        image="/external.png"
      />

      <Project
        title="Haemosync"
        description="HemoSync is a smart and efficient full-stack web application designed to streamline the process of blood and tissue donation. It connects hospitals, donors, and recipients through a centralized system that enables real-time tracking of availability, intelligent matching based on compatibility, and role-based access for seamless coordination. Built using the MERN stack, HemoSync ensures secure data handling and provides a responsive user experience aimed at improving emergency medical response and saving lives."
        image="/haemosync.png"
        reverse
      />

      
    </div>
  );
};

export default Projects;
