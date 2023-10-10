import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';
import Content from '../components/Content';

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
    <>
      <Sidebar></Sidebar>
      <Video>
        <video src="/assets/video/wet.mp4" autoPlay={true} controls={false} muted={true} loop={true} className='fullscreen'></video>
      </Video>
      <Content>
        {/* Apply the fade-in class conditionally based on the state */}
        <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
          <div className="project-container">
            <h1>Lower East Side Cactus and Succulent Society</h1>
            <h3>
              <span><a href="https://lescss.org" target='blank'>www.lescss.org</a></span>
              <span><a href="https://github.com/joeyvalley/LESCSS" target='blank'>Github</a></span>
            </h3>
            <p><span className='bold'>Languages and Frameworks:</span> React, Javascript, Node.js</p>
            <p><span className='bold'>Management and Deployment:</span> Git, Github, Vercel</p>
            <p><span className='bold'>Databases:</span> N/A</p>
            <p><span className='bold'>API:</span> Mailchimp</p>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto veritatis inventore sequi sunt voluptate quis fuga, doloremque rerum, hic, exercitationem maxime accusamus fugit recusandae cumque fugiat aperiam. Doloribus, unde!</p>
          </div>
        </div>
      </Content >
    </>
  );
}
