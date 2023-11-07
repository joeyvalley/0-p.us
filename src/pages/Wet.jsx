import React, { useState, useEffect } from 'react';

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
    <div className="content-container">
      {/* Apply the fade-in class conditionally based on the state */}
      <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
        <div className="project-container">
          <h1>
            <span className='bold'>Wet</span>
            <span className='date'>2023</span>
          </h1>
          <h3>
            <span><a href="https://wet.band">www.wet.band</a></span>
            <span><a href="https://github.com/joeyvalley/Wet">Github</a></span>
          </h3>
          <p><span className='bold'>Languages and Frameworks:</span> HTML, CSS, Javascript, Node.js</p>
          <p><span className='bold'>Management and Deployment:</span> Git, Github, Vercel</p>
          <p><span className='bold'>Databases:</span> N/A</p>
          <p><span className='bold'>API:</span> Bandsintown</p>
          <p>&nbsp;</p>
          <p>Wet is a band that I co-founded in 2012 and in which I continue to serve as executive producer and musical director.</p>
          <p>&nbsp;</p>
          <p>We have released <a href="https://open.spotify.com/album/4vTrbwGUedO7SN3DqNOiYU?si=JcGsKvs1SiiITo0hXkHN6g" target='_blank'>three</a> <a href="https://open.spotify.com/album/3avxMSC0AsjtdARQXC7tjF?si=M-dOgt4rSrSFUR0CjMGKkQ" >critically-acclaimed</a> <a href="https://open.spotify.com/album/73JjCWpjzmp1alhxVtywvF?si=9dVwTg4DSsuS7dGZQu4SYQ" >albums</a>, a <a href="https://open.spotify.com/album/6mmsKRts1C4XuRJChx0Pyx?si=g35Zj8ojRtmUC2OGtnb2yA" >handful</a> <a href="https://open.spotify.com/album/2duRIPL8mqE79yatofUGE3?si=zIPQ6wXdQUGwctSFi4Rilw" >of</a> <a href="https://open.spotify.com/album/4yRKKoT2iG1hfVDWo59EKZ?si=xy5nxhe5SFygW93hJxlSUw" >EPs</a>, <a href="https://www.bandsintown.com/a/198778-wet?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar">toured internationally</a> with a diverse network of artists, appeared on <a href="https://www.complex.com/music/a/jessie-morris/wet-performs-weak-on-the-tonight-show-starring-jimmy-fallon" >television</a> and had our work featured in television and <a href="https://www.netflix.com/tudum/articles/you-people-soundtrack" >film</a>.</p>
          <p>&nbsp;</p>
          <p>Throughout the band's career, I have built and maintained our website from very basic ASCII-art HTML pages to the (relatively) more involved present.</p>
          <p>&nbsp;</p>
          <p>This current iteration is a dynamic, release-centric website that showcases the band's journey over the years, highlighting upcoming tour dates with the Bandsintown API, providing easy, cross-platform access to our discorgraphy, and keeping fans connected through social media.</p>
        </div>
      </div>
    </div>
  );
}
