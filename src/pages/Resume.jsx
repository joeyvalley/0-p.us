import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default function Resume() {
  return (
    <>
      <Sidebar></Sidebar>
      <Content>
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
          <p>Software developer with a multi-faceted background in creative problem solving. My diverse range of professional experience allows me to approach complex issues with a unique perspective and offer innovative approaches to traditional engineering paradigms. I am deeply passionate about bleeding-edge technologies and developing new and interesting tools for an increasingly oblique future.</p>

          <h2>Skills</h2>
          <p><span className='bold'>Languages and Frameworks:</span> JavaScript, Node.js, Express, React, Python, Flask, Django</p>
          <p><span className='bold'>Management and Deployment:</span> Git, Github, Heroku, Shopify, Vercel</p>
          <p><span className='bold'>Databases:</span> MongoDB, PostgreSQL, SQL</p>
          <p><span className='bold'>Other:</span> Ableton Live Suite, Adobe Creative Suite, Arduino, Max/MSP, Touchdesigner</p>


          <h2>Selected Projects</h2>
          <p><span className='bold'>Nonhuman Teachers</span> <a href="https://nonhumanteachers.org">www.nonhumanteachers.org</a></p>
          <p className='resume-description'>Designed, developed and deployed a responsive web presence for Non-Human Teachers, a 501(c)(3) not-for-profit based in Los Angeles, utilizing Javascript, Node.js, Express and React.</p>
          <p><span className='bold'>Wet </span><a href="https://wet.band">www.wet.band</a></p>
          <p className='resume-description'>Designed, developed and deployed a responsive HTML5-enabled web presence for the band Wet, which utilizes multiple APIs to provide users with up-to-date release information and tour dates, utilizing Javascript, Node.js, Express and React.</p>
          <p><span className='bold'>LESCSS </span><a href="https://lescss.org">www.lescss.org</a></p>
          <p className='resume-description'>Designed, developed and deployed the website for the Lower East Side Cactus and Succulent Society, utilizing Javascript, Node.js, Express and React.</p>
          <p><span className='bold'>f-r0.gg </span><a href="https://f-r0.gg">www.f-r0.gg</a></p>
          <p className='resume-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia assumenda repellat recusandae doloremque explicabo ipsam totam autem? Commodi, quis autem. Reiciendis magnam consequatur accusantium! Sapiente, id impedit! Facilis, ad eligendi.</p>


          <h2>Experience</h2>
          <h4>
            <span className='bold'>General Assembly<span className="italics"> Software Engineering Fellow</span></span>
            <span>January 2023 - April 2023</span>
          </h4>
          <p className='resume-description'>Immersive engineering program focused on full-stack software development. Applied best practices in testing, deployment, code maintenance, documentation, and responsive design to real-world products both individually and in small teams.</p>
          <h4>
            <span className='bold'>Wet <span className="italics">Artist, Producer</span></span>
            <span>July 2012 - Present</span>
          </h4>
          <p className='resume-description'>As a founding member of the band Wet, I have written, composed, and produced award-winning recordings for Columbia Records and AWAL, served as a creative director for press campaigns, album design, packaging and merchandise, and collaborated with a diverse network of musicians and visual artists.</p>

          <h4>
            <span className="bold">Cactus Store <span className="italics">Designer</span></span>
            <span>June 2017 - Present</span>
          </h4>
          <p className="resume-description">With Cactus Store, I am responsible for planning, designing, curating and maintaining our seasonal New York location, consisting of the garden, greenhouse, performance space, and storefront at 5 Essex Street, New York, NY.</p>
          <h2>Education</h2>
          <h4>
            <span className='bold'>General Assembly <span className="italics">Software Engineering Immersive Program</span></span>
            <span>January 2023 - April 2023</span>
          </h4>
          <p className='resume-description'>Certificate, Software Engineering</p>
          <h4>
            <span className='bold'>New York University <span className='italics'>Gallatin School of Individualized Study</span></span>
            <span>September 2006 - May 2010</span>
          </h4>
          <p>Bachelor of Arts, Digital Media</p>

        </div>
      </Content >
    </>
  )
}