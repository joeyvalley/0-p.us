import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

export default function Resume() {

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
    <div className={`text-content-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="resume-container">
        <h1>Joseph Valle</h1>
        <h3>
          <span>New York, NY</span>
          <span>+1 (617) 816-1392</span>
          <span><a href="mailto:info@0-p.us">info@0-p.us</a></span>
          <span><Link to="/">Portfolio</Link></span>
          <span><a href="https://github.com/joeyvalley">Github</a></span>
          <span><a href="https://www.linkedin.com/in/joeyvalley/">Linkedin</a></span>
        </h3>
        <p>Multifaceted software engineer with a penchant for developing innovative approaches to traditional engineering challenges across diverse disciplines. Strong communication skills, adept at conveying complex technical concepts with diverse teams to strategize, plan, and implement creative solutions.</p>
        {/* <br /> */}
        <h2>Selected Projects</h2>
        <h4>
          <span>
            <span className='bold'>Nonhuman Teachers </span>
            <a href="https://nonhumanteachers.org">www.nonhumanteachers.org</a>
          </span>
          <span className='bold'>November 2023</span>
        </h4>
        <p className='resume-description'>&bull; developed a full-stack web application to allow for integrated fundraising, event promotion, newsletter signup, and community outreach resulting in over $30,000 in donations and ticket sales</p>
        <p className='resume-description'>&bull; developed custom admin portal enabling the organization to pursue a new publishing venture</p>
        <h4>
          <span>
            <span className='bold'>LESCSS </span>
            <a href="https://lescss.org">www.lescss.org</a>
          </span>
          <span className='bold'>August 2023</span>
        </h4>
        <p className='resume-description'>&bull; designed and developed a full-stack web application using Typescript, Vite, Django, and PostgreSQL</p>
        <p className='resume-description'>&bull; created a custom content-management system to allow organization members to efficiently and effectively manage meeting information and digital assets</p>
        {/* <br /> */}
        <h2>Experience</h2>
        <h4>
          <span className='bold'>General Assembly<span className="italics"> Software Engineering Fellow</span></span>
          <span className='bold'>January 2023 - April 2023</span>
        </h4>
        <p className='resume-description'>&bull; completed over 480 hours of individual and collaborative software development projects</p>
        <p className='resume-description'>&bull; built +35 web apps, programs, and websites as part of the Software Engineering Immersive program</p>
        <h4>
          <span className="bold">Cactus Store <span className="italics">Artistic Director</span></span>
          <span className='bold'>June 2017 - October 2022</span>
        </h4>
        <p className="resume-description">&bull; designed and curated a seasonal botanical space consisting of a public greenhouse and garden, performance space, and storefront on the Lower East Side of Manhattan</p>
        <p className='resume-description'>&bull; coordinated with award-winning artists, scientists and brands on the development of various art installations, educational workshops, public and private events, and commercial products</p>
        <h4>
          <span className='bold'>Wet <span className="italics">Artist, Producer</span></span>
          <span className='bold'>July 2012 - October 2022</span>
        </h4>
        <p className='resume-description'>&bull; composed and produced award-winning recordings for Columbia Records, Universal Music Publishing Group and AWAL, resulting in over 200 million streams and an RIAA-certified Gold record</p>
        <p className='resume-description'>&bull; served as a creative director for album design and packaging, music videos, merchandise, and press strategy for three international album campaigns</p>
        {/* <br /> */}
        <h2>Education</h2>
        <h4>
          <span className='bold'>General Assembly <span className="italics">Software Engineering Immersive Program</span></span>
          <span className='bold'>January 2023 - April 2023</span>
        </h4>
        <p className='resume-description'>Certificate <span className="italics">Software Engineering</span></p>
        <h4>
          <span className='bold'>New York University <span className='italics'>Gallatin School of Individualized Study</span></span>
          <span className='bold'>September 2006 - May 2010</span>
        </h4>
        <p>Bachelor of Arts <span className='italics'>Digital Media</span></p>

      </div>
    </div>
  )
}