import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { imagesList } from "../imagesList";

export default function Projects() {


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


      <div className="mobile-info">
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
        </ul>
      </div >
    </div>
  )
}

