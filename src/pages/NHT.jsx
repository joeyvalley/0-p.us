import React, { useState, useEffect } from 'react';

export default function NHT() {
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
            <span className='bold'>Nonhuman Teachers</span>
            <span className='date'>2023</span>
          </h1>
          <h3>
            <span><a href="https://nonhumanteachers.org" target='blank'>www.nonhumanteachers.org</a></span>
            <span><a href="https://github.com/joeyvalley/Nonhuman-Teachers" target='blank'>Github (frontend)</a></span>
            <span><a href="https://github.com/joeyvalley/Nonhuman-Teachers-Backend" target='blank'>Github (backend)</a></span>
          </h3>
          <p><span className='bold'>Languages and Frameworks:</span> React, Javascript, Node.js,  Express, Mongoose</p>
          <p><span className='bold'>Management and Deployment:</span> Git, Github, Glitch, Vercel</p>
          <p><span className='bold'>Databases:</span> MongoDB</p>
          <p><span className='bold'>API:</span> Donorbox, Mailchimp, Stripe</p>
          <p>&nbsp;</p>
          <p><span className='bold'>Key Contributions</span></p>
          <ul>
            <li>&bull; Demonstrated expertise in full-stack web development, from conceptualization to deployment, using modern technologies and best practices.</li>
            <li>&bull; Enhanced user experience and interaction with the organization's platform, leading to increased engagement and support.</li>
            <li>&bull; Developed secure and efficient content management solutions, streamlining the organization's administrative processes.</li>
          </ul>
          <p>&nbsp;</p>
          <p><span className='bold'>Details</span></p>
          <p>For this project, I lead the design and development of a dynamic React-based web application, capitalizing on the framework's robust component structure to craft an intuitive and user-friendly interface that serves to facilitate user engagement and learning about the Nonhuman Teachers organization. I created custom React components that enable users to interact with the organization's projects and support its mission effectively.</p>
          <p>&nbsp;</p>
          <p>In addition, I engineered a resilient backend server utilizing Express, Mongoose, and MongoDB, enhancing data handling and storage capabilities. I successfully deployed the server on Glitch, ensuring smooth and reliable access for users and a cost-effective solution for the client. The server implements functionality for users to submit and access “Experience Reports”, contributing to a vital on-going publishing project the organization is engaged in.</p>
          <p>&nbsp;</p>
          <p>Lastly, I developed a custom admin portal, implementing robust content moderation features, allowing for the approval or rejection of posts based on content appropriateness, thereby empowering the organization to manage new submissions efficiently and effectively.</p>
        </div>
      </div>
    </div>
  );
}
