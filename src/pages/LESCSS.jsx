import React, { useState, useEffect } from 'react';

export default function LESCSS() {
  // State to control the fade-in effect
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set the fade-in state to true after a short delay (e.g., 500ms)
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);

    // Cleanup function to clear the timer if the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="content-container">
      {/* Apply the fade-in class conditionally based on the state */}
      <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
        <div className="project-container">
          <h1>
            <span className='bold'>Lower East Side Cactus and Succulent Society</span>
            <span className='date'>2023</span>
          </h1>
          <h3>
            <span><a href="https://lescss.org" target='blank'>www.lescss.org</a></span>
            <span><a href="https://github.com/joeyvalley/LESCSS" target='blank'>Github</a></span>
          </h3>
          <div className='details'>
            <p><span className='bold'>Languages and Frameworks:</span> Vite, Typescript, Node.js, Python, Django</p>
            <p><span className='bold'>Management and Deployment:</span> Git, Github, Vercel, Heroku</p>
            <p><span className='bold'>Databases:</span> PostgreSQL</p>
            <p><span className='bold'>API:</span> Mailchimp</p>
          </div>
          <p><span className='bold'>Key Contributions</span></p>
          <p>&nbsp;</p>
          <p><span className='bold'>Details</span></p>
          <p>I designed and developed their site with the goal of highlighting the group's work in the community and maintaining an archive of the group's many meetings.</p>
          <p>&nbsp;</p>
          <p>Recognizing the need for a streamlined yet effective solution, I strategically chose Vite as the development framework. Additionally, I integrated a PostgreSQL database to efficiently manage, store, and retrieve detailed records of their gatherings, creating a backend server using Python and Django to handle client-side requests.</p>
        </div>
      </div>
    </div>
  );
}
