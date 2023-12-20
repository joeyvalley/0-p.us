import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import '../mobile.css';

import Contact from '../pages/Contact';
import LESCSS from '../pages/LESCSS';
import NHT from '../pages/NHT';
import Frog from '../pages/Frog';
import Kaur from '../pages/Kaur';
import Resume from '../pages/Mobile-Resume';
import Home from "../pages/Mobile-Home";
import Projects from "../pages/Projects";

export default function Mobile({ newVisitor, onNewVisitorChange }) {


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
          <Route path="/" element={<Home newVisitor={newVisitor} onNewVisitorChange={onNewVisitorChange} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/lescss" element={<LESCSS isMobile={mobile} />} />
          <Route path="/projects/kaur-accounting" element={<Kaur isMobile={mobile} />} />
          <Route path="/projects/wet" element={<Frog isMobile={mobile} />} />
          <Route path="/projects/fr-0gg" element={<Frog isMobile={mobile} />} />
          <Route path="/projects/nonhuman-teachers" element={<NHT isMobile={mobile} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </div>
      <div className="mobile-footer">
        <Link to="/projects" className="mobile-footer-link">Projects</Link>
        <Link to="/resume" className="mobile-footer-link">Resume</Link>
        <span className="mobile-footer-link" onClick={() => handleExternalLink('https://github.com/joeyvalley')}> Github</span>
        <span className="mobile-footer-link" onClick={() => handleExternalLink('https://www.linkedin.com/in/joeyvalley/')}>Linkedin</span>
        <Link to="/contact" className="mobile-footer-link">Contact</Link>
      </div>
    </>
  );
}
