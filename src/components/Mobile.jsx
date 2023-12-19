import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import '../mobile.css';

import Contact from '../pages/Contact';
import LESCSS from '../pages/LESCSS';
import NHT from '../pages/NHT';
import Frog from '../pages/Frog';
import Kaur from '../pages/Kaur';
import Resume from '../pages/Mobile-Resume';
import Home from "../pages/Home";


export default function Mobile() {

  const mobile = true;

  function handleExternalLink(URL) {
    window.open(URL);
  }

  return (
    <>
      <div className="mobile-header">
        <Link to="/" className="mobile-footer-link">0-p.us</Link>
      </div >
      <div className="mobile-content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/lescss" element={<LESCSS isMobile={mobile} />} />
          <Route path="/projects/kaur-accounting" element={<Kaur isMobile={mobile} />} />
          <Route path="/projects/wet" element={<Frog isMobile={mobile} />} />
          <Route path="/projects/fr-0gg" element={<Frog isMobile={mobile} />} />
          <Route path="/projects/nonhuman-teachers" element={<NHT isMobile={mobile} />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <div className="mobile-info">
          <span className="mobile-my-name">Joseph Valle</span>
          <span className="description">Non-disciplinary software engineer currently based in New York, NY.</span>
          <h2>Selected Projects</h2>
          <ul>
            <li>
              <Link to="/projects/nonhuman-teachers" className="project-title">nonhumanteachers.org</Link>
            </li>
            <li className="description">Web application for Nonhuman Teachers, an ecology-focused non-profit organization based in Los Angeles and New York.</li>

            <li>
              <Link to="/projects/fr-0gg" className="project-title">fr-0.gg</Link>
            </li>
            <li className="description">Automated Discord bot creating a daily AI-generated frog sculpture.</li>

            <li>
              <Link to="/projects/kaur-accounting" className="project-title">kauraccounting.com</Link>
            </li>
            <li className="description">Single-page React application for Kaur Accounting, a modern accounting firm offering financial management to US-based clients.</li>


            {/* <li>
              <Link to="/projects/lescss" className="project-title">lescss.org</Link>
            </li>

            <li className="description">Fully responsive and certified dirt-style website for the Lower East Side Cactus and Succulent Society, New York City's premiere group of xerophiles and rare plant enthusiasts.</li>

            <li>
              <Link to="/projects/wet" className="project-title">wet.band</Link>
            </li>

            <li className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo sint sed officiis nihil illo nam deleniti ipsam. Aperiam harum eveniet accusantium illo adipisci praesentium non, soluta tempore minima veniam?</li> */}
          </ul>
        </div >
      </div>
      <div className="mobile-footer">
        <Link to="/" className="mobile-footer-link">Home</Link>
        <Link to="/resume" className="mobile-footer-link">Resume</Link>
        <span className="mobile-footer-link" onClick={() => handleExternalLink('https://github.com/joeyvalley')}> Github</span>
        <span className="mobile-footer-link" onClick={() => handleExternalLink('https://www.linkedin.com/in/joeyvalley/')}>Linkedin</span>
        <Link to="/contact" className="mobile-footer-link">Contact</Link>
      </div>
    </>
  );
}
