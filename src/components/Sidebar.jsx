import ArrowSVG from "./ArrowSVG";
import { Link } from "react-router-dom";

export default function Sidebar() {

  function handleExternalLink(URL) {
    window.open(URL);
  }

  return (
    <div className="sidebar">
      <div className="profile-photo-container">
        <Link to="/">
          <img alt="profile" className="profile-photo" src={`/assets/img/profile/4.jpg`} />
        </Link>
      </div>
      <div className="info">
        <Link to="/" className="h2-link">
          <span>Joseph Valle</span>
        </Link>
        <span className="description">Non-disciplinary software engineer currently based in New York, NY.</span>
        <h2>Selected Projects</h2>
        <ul>
          <li>
            <Link to="/projects/nonhuman-teachers" className="project-title">
              nonhumanteachers.org&nbsp;<ArrowSVG></ArrowSVG>
            </Link>
          </li>
          <li className="description">Web application for Nonhuman Teachers, an ecology-focused non-profit organization based in Los Angeles and New York.</li>

          <li>
            <Link to="/projects/lescss" className="project-title">
              lescss.org&nbsp;<ArrowSVG></ArrowSVG>
            </Link>
          </li>

          <li className="description">Fully responsive and certified dirt-style website for the Lower East Side Cactus and Succulent Society, New York City's premiere group of xerophiles and rare plant enthusiasts.</li>
          <li>
            <Link to="/projects/wet" className="project-title">
              wet.band&nbsp;<ArrowSVG></ArrowSVG>
            </Link>
          </li>
          <li className="description">Desktop and mobile website for Wet, the band formerly known as the future of pop. This is one of the first sites I made so be nice.</li>
        </ul>
      </div >
      <div className="sidebar-footer">
        <Link to="/resume" className="footer-link">Resume</Link>
        <span className="footer-link" onClick={() => handleExternalLink('https://github.com/joeyvalley')} > Github</span>
        <span className="footer-link" onClick={() => handleExternalLink('https://www.linkedin.com/in/joeyvalley/')}>Linkedin</span>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
    </div >
  );
}
