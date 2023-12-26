import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../style.css';
import imageList from '../fetchedData.json';

export default function Sidebar({ onPlayingChange }) {
  function handleExternalLink(URL) {
    window.open(URL);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Link to="/" className="my-name" onClick={() => { onPlayingChange(true) }}>
          <span>Joseph Valle</span>
        </Link>
      </div>
      <div className="info">
        <span className="description">Non-disciplinary software engineer currently based in New York, NY.</span>
        <h2>Selected Projects</h2>
        <ul>
          <li>
            <Link to="/projects/nonhuman-teachers" className="project-title" onClick={() => { setTimeout(() => { onPlayingChange(false) }, 1000) }}>nonhumanteachers.org</Link>
          </li>
          <li className="description">Web application for Nonhuman Teachers, an ecological non-profit organization based between Los Angeles and New York.</li>
          <li>
            <Link to="/projects/fr-0gg" className="project-title" onClick={() => { setTimeout(() => { onPlayingChange(false) }, 1000) }}>fr-0.gg</Link>
          </li>
          <li className="description">Automated Discord bot creating a daily AI-generated frog sculpture.</li>

          <li>
            <Link to="/projects/kaur-accounting" className="project-title" onClick={() => { setTimeout(() => { onPlayingChange(false) }, 1000) }}>kauraccounting.com</Link>
          </li>
          <li className="description">Single-page React application for Kaur Accounting, a modern accounting firm offering financial management to US-based clients.</li>

          {/* <li>
            <Link to="/projects/lescss" className="project-title">lescss.org</Link>
          </li>

          <li className="description">Fully responsive and certified dirt-style website for the Lower East Side Cactus and Succulent Society, New York City's premiere group of xerophiles and rare plant enthusiasts.</li> */}

          {/* <li>
            <Link to="/projects/lescss" className="project-title">wet.band</Link>
          </li>

          <li className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo sint sed officiis nihil illo nam deleniti ipsam. Aperiam harum eveniet accusantium illo adipisci praesentium non, soluta tempore minima veniam?</li> */}

        </ul>
      </div >
      <div className="sidebar-footer">
        <Link to="/resume" className="footer-link" onClick={() => { onPlayingChange(false); }}>Resume</Link>
        <span className="footer-link" onClick={() => handleExternalLink('https://github.com/joeyvalley')}> Github</span>
        <span className="footer-link" onClick={() => handleExternalLink('https://www.linkedin.com/in/joeyvalley/')}>Linkedin</span>
        <Link to="/contact" className="footer-link" onClick={() => { onPlayingChange(false); }}>Contact</Link>
      </div>
    </div >
  );
}
