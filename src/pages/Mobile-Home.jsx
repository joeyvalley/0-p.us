import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { imagesList } from "../imagesList";

export default function Home({ newVisitor, onNewVisitorChange }) {


  const [fadeIn, setFadeIn] = useState(false);
  const [image, setImage] = useState("1.jpg");
  const [hide, setHide] = useState(false);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log(newVisitor);
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const changeImage = () => {
      let randImage;
      do {
        randImage = imagesList[Math.floor(Math.random() * (imagesList.length - 1)) + 1];
      } while (randImage === image);

      setImage(randImage);
    };
    const delayMin = Math.floor(Math.random() * 250);
    let delay = Math.floor(Math.random() * 50) + delayMin;
    if (delay > 290) {
      delay += 1000;
    }
    const timer = setTimeout(changeImage, delay);

    return () => clearTimeout(timer);
  }, [image]);

  function handleNewVistorClick() {
    setHide(true);
    onNewVisitorChange(false);
    setTimeout(() => { setDisplay(false) }, 500);
  }

  function haha() {
    const sound = new Audio("/assets/witch.wav");
    try {
      sound.play();
      console.log('hahahahahahahaha');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={`video-overlay ${fadeIn ? 'fade-in' : ''}`}>
      <div className={newVisitor ? "mobile-profile-photo-container" : "mobile-profile-photo-container hidden displayed"}>
        <img src={`/assets/img/profile/${image}`} alt="Profile" onClick={() => { handleNewVistorClick(); haha(); }} />
      </div>

      <div className="mobile-info">
        <div className={newVisitor ? "info-container" : "info-container show"}>
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
          </ul>
        </div >


      </div>
    </div>
  )
}

