import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import imageList from '../fetchedData.json';

export default function Home({ newVisitor, onNewVisitorChange }) {
  const [fadeIn, setFadeIn] = useState(false);
  const [hide, setHide] = useState(false);
  const [display, setDisplay] = useState(true);
  const resultArray = Object.keys(imageList).map(key => imageList[key].image_URL);
  const [image, setImage] = useState(resultArray[Math.floor(Math.random() * (resultArray.length - 1)) + 1]);

  useEffect(() => {
    console.log(newVisitor);
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  function changeImage() {
    let randImage;
    do {
      randImage = resultArray[Math.floor(Math.random() * (resultArray.length - 1)) + 1];
    } while (randImage === image);
    setImage(randImage);
  };

  useEffect(() => {
    const delayMin = Math.floor(Math.random() * 300) + 50;
    const delay = Math.floor(Math.random() * 50) + delayMin;
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
        <img src={image} alt="Profile" onClick={() => { handleNewVistorClick(); haha(); }} />
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

