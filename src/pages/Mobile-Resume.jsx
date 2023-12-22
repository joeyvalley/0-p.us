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
    <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
      <div className="mobile-resume-container">
        <h1>
          <span>Joseph Valle</span>
          <span><a href="assets/Joseph Valle | Resume.pdf">PDF Version</a></span>
        </h1>
        <h3>
          <span><a href="mailto:info@0-p.us">info@0-p.us</a></span>
          <span><Link to="/">Portfolio</Link></span>
          <span><a href="https://github.com/joeyvalley" target="_blank">Github</a></span>
          <span><a href="https://www.linkedin.com/in/joeyvalley/" target="_blank">Linkedin</a></span>
        </h3>
        <p>Multifaceted software engineer with a proficiency in developing innovative approaches to traditional engineering challenges across diverse disciplines. Strong communication skills, adept at conveying complex technical concepts with diverse teams to strategize, plan, and implement creative solutions.</p>
        {/* <br /> */}
        <h2>Selected Projects</h2>
        <h4>
          <span className='bold'>fr-0.gg </span>
          <span></span>
          <span><a href="https://fr-0.gg" target="_blank">www.fr-0.gg</a></span>
          <span className='bold'>Dec 2023</span>
        </h4>
        <p className='resume-description'>&bull; engineered a stand-alone Discord bot to automate the creation of AI-generated imagery with Midjourney,
          integrating cloud storage and database management for efficient data handling and retrieval</p>
        <p className='resume-description'>&bull; created a Raspberry Pi-based deployment with Shell scripting and cron jobs to ensure continuous,
          autonomous operation of the bot</p>
        <h4>
          <span className='bold'>Nonhuman Teachers </span>
          <span></span>
          <span><a href="https://nonhumanteachers.org" target="_blank">www.nonhumanteachers.org</a></span>
          <span className='bold'>Nov 2023</span>
        </h4>
        <p className='resume-description'>&bull; developed a full-stack web application to allow for integrated fundraising, event promotion, newsletter signup, and community outreach resulting in over $30,000 in donations and ticket sales</p>
        <p className='resume-description'>&bull; developed custom admin portal enabling the organization to pursue a new publishing venture</p>
        <h2>Experience</h2>
        <h4>
          <span className='bold'>General Assembly</span>
          <span>&nbsp;</span>
          <span className="italics">Software Engineering Fellow</span>
          <span className='bold'>Jan 2023 - Apr 2023</span>
        </h4>
        <p className='resume-description'>&bull; completed over 480 hours of individual and collaborative software development projects</p>
        <p className='resume-description'>&bull; built +35 web apps, programs, and websites as part of the Software Engineering Immersive program</p>
        <h4>
          <span className="bold">Cactus Store</span>
          <span></span>
          <span className="italics">Artistic Director</span>
          <span className='bold'>Jun 2017 - Oct 2022</span>
        </h4>
        <p className="resume-description">&bull; designed and curated a seasonal botanical space consisting of a public greenhouse and garden, performance space, and storefront on the Lower East Side of Manhattan</p>
        <p className='resume-description'>&bull; coordinated with award-winning artists, scientists and brands on the development of various art installations, educational workshops, public and private events, and commercial products</p>
        <h4>
          <span className='bold'>Wet</span>
          <span></span>
          <span className="italics">Artist, Producer</span>
          <span className='bold'>Jul 2012 - Oct 2022</span>
          <span></span>
        </h4>
        <p className='resume-description'>&bull; composed and produced award-winning recordings for Columbia Records, Universal Music Publishing Group and AWAL, resulting in over 200 million streams and an RIAA-certified Gold record</p>
        <p className='resume-description'>&bull; served as a creative director for album design and packaging, music videos, merchandise, and press strategy for three international album campaigns</p>
        {/* <br /> */}
        <h2>Education</h2>
        <h4>
          <span className='bold'>General Assembly</span>
          <span className='bold'>Jan 2023 - Apr 2023</span>
        </h4>
        <p className='italics'>Software Engineering Immersive Program</p>
        <p className='resume-description'>Certificate, Software Engineering</p>
        <h4>
          <span className='bold'>New York University</span>
          <span className='bold'>Sept 2006 - Dec 2009</span>

        </h4>
        <p className='italics'>Gallatin School of Individualized Study</p>
        <p>Bachelor of Arts, Digital Media</p>

      </div>
    </div>
  )
}