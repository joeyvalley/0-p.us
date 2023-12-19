import React, { useState, useEffect } from 'react';

export default function Kaur(props) {
  const [fadeIn, setFadeIn] = useState(false);
  const isMobile = props.isMobile;

  useEffect(() => {

    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
      <div className={isMobile ? 'mobile-project-container' : 'project-container'}>
        <h1>
          <span>Kaur Accounting</span>
          <span className='date'>2023</span>
        </h1>
        <h3>
          <span><a href="https://fr-0.gg" target='_blank'>www.kauraccounting.com</a></span>
          <span><a href="https://github.com/joeyvalley/fr-0.gg" target='blank'>Github</a></span>
        </h3>
        <p><span className='bold'>Languages and Frameworks:</span> React, Javascript, Node.js</p>
        <p><span className='bold'>Management and Deployment:</span> Git, Github, Vercel</p>
        <p><span className='bold'>Databases:</span> N/A</p>
        <p><span className='bold'>API:</span> N/A</p>
        <p>&nbsp;</p>
        <p><span className='bold'>Key Contributions</span></p>
        <ul>

          <li>&bull; Designed and developed a playful yet professional single-page web application utilizing JavaScript and React with Node Package Manager.</li>
          <li>&bull; Engineered a seamless user experience, effectively showcasing the accounting firm's services and enhancing client engagement through a contemporary design approach.</li>
          <li>&bull; Deployed the application on Vercel, ensuring a stable and secure hosting environment.</li>
        </ul>
        <p>&nbsp;</p>
        <p><span className='bold'>Details</span></p>
        <p>As the lead designer and developer for Kaur Accounting, I skillfully blended modern aesthetics with functionality, crafting a playful yet professional single-page web application advertising the firm's services. I engineered a seamless user experience, effectively showcasing the accounting firm's services and enhancing client engagement through a contemporary design approach.</p>
        <p>&nbsp;</p>
        <p>Utilizing the React framework with Javascript and Node.js, I developed custom components to build a responsive web application compatible across all modern devices devices. I ultimately deployed the application on Vercel, ensuring a stable and secure hosting environment.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}
