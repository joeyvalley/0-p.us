import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';
import Content from '../components/Content';

export default function Instargam() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Sidebar></Sidebar>
      <Video>
        <video src="/assets/video/wet.mp4" autoPlay={true} controls={false} muted={true} loop={true} className='fullscreen'></video>
      </Video>
      <Content>
        {/* Apply the fade-in class conditionally based on the state */}
        <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
          <div className="project-container">
            <h1>Instargam</h1>
            <h3>
              <span><a href="https://github.com/MiguelArias01/instagram-clone" target='blank'>Github (front-end)</a></span>
              <span><a href="https://github.com/joeyvalley/unit-4-backend" target='blank'>Github (back-end)</a></span>
            </h3>
            <p><span className='bold'>Languages and Frameworks:</span> React, Tailwind, Python, Django</p>
            <p><span className='bold'>Management and Deployment:</span> Git, Github, Heroku, Vercel</p>
            <p><span className='bold'>Databases:</span> PostgresSQL</p>
            <p><span className='bold'>API:</span> Cloudinary</p>
            <h2>About:</h2>
            <p>Unoriginal, sure, but this was the assigned final project of my General Assembly cohort, so what can ya do? Conceptually it's nothing to be proud of, but logistically it is sound development.</p>
            <p>&nbsp;</p>
            <p>As the back-end lead for this project, I was excited to work with Python and Django for the first time.</p>
            <p>&nbsp;</p>
            <p>As a framework, I found Django to have a sharper learning curve than Express. But once I became more acquainted with it (and after several YouTube tutorials) I began to grasp it's potential as an out-of-the-box solution for quick web application development.</p>
            <p>&nbsp;</p>
            <p>I started with constructing models for the database objects and learning how to create relationships between various fields in these objects. It was during this phase of development that I started to see the power of Django and the great benefits of SQL and relational database management systems.</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </Content >
    </>
  );
}
