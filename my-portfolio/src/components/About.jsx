import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className='about'>
      <h1>HELLO I'M VARSHA !</h1>
      <div className="spacer" />
      <h2>ABOUT ME</h2>
      <div className="spacer" />
      <div className='about-content'>
        <p>
          I'm currently pursuing a Bachelor of Engineering in Electronics and Communication Engineering at Bannari Amman Institute of Technology.
          I have a strong interest in Java programming, web development, Database Management Systems (DBMS), and Computer Networks.
          With a passion for building efficient and user-centric digital solutions, I constantly seek opportunities to learn and apply my skills in real-world projects.
        </p>
        <img src="/portfolio.png" alt="varsha" />
      </div>
    </div>
  );
};

export default About;
