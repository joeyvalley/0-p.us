import { useEffect, useState } from "react";

export default function Contact() {
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
    <div className="content-container">
      {/* Apply the fade-in class conditionally based on the state */}
      <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
        <div className="project-container">
          {/* <h1>
            <span className='bold'>Contact</span>
          </h1> */}
          <div className="contact-info">
            <span className="bold">Joseph Valle</span>
            <span className="bold">+1 (617) 816-1392</span>
            <span className="bold"><a href="mailto:info@0-p.us">info@0-p.us</a></span>
            <span className="bold"><a href="https://instagram.com/joeyvalley">@joeyvalley</a></span>
          </div>
          <h1>
            {/* <span className='bold'>About</span> */}
          </h1>
          <p className="contact">Interdisciplinary software engineer working primarily in a web-based context but often experimenting with audio, video, physical computing, and recently machine learning and artificial intelligence.</p>
          <p className="contact">I am a recent graduate of <span className="bold">General Assembly's <a href="https://generalassemb.ly/education/software-engineering-immersive/new-york-city">Software Engineering Immersive</a> program</span> and an alumnus of <span className="bold">New York University's <a href="https://gallatin.nyu.edu/">Gallatin School of Individualized Study</a></span>, where my concentration was on digital media.</p>
          <p className="contact">For the past ten years I have worked professionally as an <span className="bold"><a href="https://en.wikipedia.org/wiki/Wet_(band)">artist</a> and <a href="https://open.spotify.com/playlist/5JDjOqfhy9Bdas3sCwCBgT?si=ec5c5f8e24dc42c0">producer</a></span> represented by <span className="bold">Columbia Records, AWAL, Universal Music Publishing Group</span> and <span className="bold">Creative Artists Agency</span>. During this time I toured internationally as a performing artist and musical director with artists such as Florence + the Machine, the 1975, and Toro y Moi, among others.</p>
          <p className="contact">Since 2017, I have operated a seasonal <a href="https://cactus.store/products/new-york-greenhouse-1">greenhouse, garden space, and storefront</a> on New York's Lower East Side called <a href="https://cactus.store">Cactus Store</a>. We specialize in cultivating <a href="https://cactus.store/collections/plants">rare and unusual plants</a> from around the world and curating <a href="https://cactus.store/pages/calendar">cultural programming</a> to encourage ecological mindfulness and broker better plant/human relationships.</p>
          <p>Software is the connective tissue between my various interests and professional experiences and has always afforded me the ability create the tools to unite these discplines in the Gesamtkunstwerk that is my silly little life. I am passionate about learning new technologies and consistently working to develop new skills as part of my creative and professional toolkit .</p>
        </div>
      </div>
    </div>
  )
}