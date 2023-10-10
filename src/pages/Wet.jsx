import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';
import Content from '../components/Content';

export default function Wet() {
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
            <h1>Wet</h1>
            <h3>
              <span><a href="https://wet.band">www.wet.band</a></span>
              <span><a href="https://github.com/joeyvalley/Wet">Github</a></span>
            </h3>
            <p><span className='bold'>Languages and Frameworks:</span> HTML, CSS, Javascript, Node</p>
            <p><span className='bold'>Management and Deployment:</span> Git, Github, Vercel</p>
            <p><span className='bold'>Databases:</span> N/A</p>
            <p><span className='bold'>API:</span> Bandsintown</p>
            <h2>About</h2>
            <p>Wet is a band that I founded with friends in the summer of 2012.</p>
            <p>&nbsp;</p>
            <p>Over the past ten years we have released <a href="https://open.spotify.com/album/4vTrbwGUedO7SN3DqNOiYU?si=JcGsKvs1SiiITo0hXkHN6g" target='_blank'>three</a> <a href="https://open.spotify.com/album/3avxMSC0AsjtdARQXC7tjF?si=M-dOgt4rSrSFUR0CjMGKkQ" >critically-acclaimed</a> <a href="https://open.spotify.com/album/73JjCWpjzmp1alhxVtywvF?si=9dVwTg4DSsuS7dGZQu4SYQ" >albums</a>, a <a href="https://open.spotify.com/album/6mmsKRts1C4XuRJChx0Pyx?si=g35Zj8ojRtmUC2OGtnb2yA" >number</a> <a href="https://open.spotify.com/album/2duRIPL8mqE79yatofUGE3?si=zIPQ6wXdQUGwctSFi4Rilw" >of</a> <a href="https://open.spotify.com/album/4yRKKoT2iG1hfVDWo59EKZ?si=xy5nxhe5SFygW93hJxlSUw" >EPs</a>, toured internationally with a diverse network of artists, appeared on <a href="https://www.complex.com/music/a/jessie-morris/wet-performs-weak-on-the-tonight-show-starring-jimmy-fallon" >television</a> and had our work featured in television and <a href="https://www.netflix.com/tudum/articles/you-people-soundtrack" >film</a>.</p>
          </div>
        </div>
      </Content>
    </>
  );
}
