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
            <span>
              <a href="https://lescss.org" target='blank'>www.lescss.org</a>
            </span>
            <span>
              <a href="https://github.com/joeyvalley/LESCSS" target='blank'>Github (frontend)</a>
            </span>
            <span>
              <a href="https://github.com/joeyvalley/LESCSS" target='blank'>Github (backend)</a>
            </span>
          </h3>
          <div className='details'>
            <p><span className='bold'>Languages and Frameworks:</span> Vite, Typescript, Node.js, Python, Django</p>
            <p><span className='bold'>Management and Deployment:</span> Git, Github, Vercel, Heroku</p>
            <p><span className='bold'>Databases:</span> PostgreSQL</p>
            <p><span className='bold'>API:</span> Mailchimp</p>
          </div>
          <p><span className='bold'>Key Contributions</span></p>
          <ul>
            <li>&bull; Demonstrated expertise in full-stack web development, from conceptualization to deployment, using modern technologies and best practices.</li>
            <li>&bull; Developed secure and efficient content management solutions, streamlining the organization's administrative processes and furthering an on-going publishing project.</li>
          </ul>
          <p>&nbsp;</p>
          <p><span className='bold'>Details</span></p>
          <p>With the guidance of LESCSS leadership, I served as the principal designer and lead developer of the organization's website, with the goal of highlighting the organization's work in New York's Lower East Side community and maintaining an archive of the group's many meetings and public workshops.</p>
          <p>&nbsp;</p>
          <p>Recognizing the need for a streamlined yet effective solution, I strategically chose Vite as the development framework. I integrated a PostgreSQL database to efficiently manage, store, and retrieve detailed records for the organization, creating a backend server using Python and Django to handle client-side requests and utlizing the powerful content management system of the Django framework.</p>
        </div>
      </div>
    </div>
  );
}
