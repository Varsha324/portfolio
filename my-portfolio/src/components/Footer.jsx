import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='contact'>
      <h1>CONTACT</h1>
      <h3>EMAIL ID</h3>
      <p>varsha.ec22@bitsathy.ac.in</p>
      <h3>LINKEDIN</h3>
      <p>https://www.linkedin.com/in/varshakotteswaran/</p>
      <h3>GIT HUB LINK</h3>
      <p>https://github.com/Varsha324</p>
      <h3>PHONE NUMBER</h3>
      <p>7010475007</p>
      <h3>FEEDBACK AND SUGGESTIONS</h3>
       <textarea
        className="feedback-box"
        placeholder="Your feedback or suggestions..."
        rows="5"
      ></textarea>
      <br />
      <button className="submit-btn">Submit</button>
    </div>
  )
}

export default Footer
