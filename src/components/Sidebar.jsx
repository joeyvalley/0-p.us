import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../style.css';
import { imagesList } from "../imagesList";


export default function Sidebar() {

  const rand = Math.floor(Math.random() * 5) + 1;
  const [infoHeight, setInfoHeight] = useState('auto');

  const [image, setImage] = useState("1.jpg");

  useEffect(() => {
    const changeImage = () => {
      let randImage;
      do {
        randImage = imagesList[Math.floor(Math.random() * (imagesList.length - 1)) + 1];
      } while (randImage === image);

      setImage(randImage);
    };
    const delayMin = Math.floor(Math.random() * 300);
    const delay = Math.floor(Math.random() * 50) + delayMin;
    const timer = setTimeout(changeImage, delay);

    return () => clearTimeout(timer);
  }, [image]);

  function handleExternalLink(URL) {
    window.open(URL);
  }

  function updateInfoHeight() {
    const profilePhotoContainer = document.querySelector('.profile-photo-container');
    const sidebarFooter = document.querySelector('.sidebar-footer');
    if (profilePhotoContainer && sidebarFooter) {
      const profileHeight = profilePhotoContainer.offsetHeight;
      const footerHeight = sidebarFooter.offsetHeight;
      const newInfoHeight = `calc(100vh - ${profileHeight + footerHeight}px)`;
      setInfoHeight(newInfoHeight);
    }
  }

  useEffect(() => {
    updateInfoHeight();
    window.addEventListener('resize', updateInfoHeight);
    return () => window.removeEventListener('resize', updateInfoHeight);
  }, []);

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
    <div className="sidebar">
      <div className="profile-photo-container">
        <img src={`/assets/img/profile/${image}`} alt="Profile" className="profile-photo" onClick={() => haha()} />
      </div>
      <div className="info" style={{ height: infoHeight, overflow: 'auto', padding: '0.5rem 1rem 0rem', backgroundColor: 'lightgrey' }}>
        <Link to="/" className="my-name">
          <span>Joseph Valle</span>
        </Link>
        <span className="description">Non-disciplinary software engineer currently based in New York, NY.</span>
        <h2>Selected Projects</h2>
        <ul>
          <li>
            <Link to="/projects/nonhuman-teachers" className="project-title">nonhumanteachers.org</Link>
          </li>
          <li className="description">Web application for Nonhuman Teachers, an ecological non-profit organization based between Los Angeles and New York.</li>

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

          <li className="description">Fully responsive and certified dirt-style website for the Lower East Side Cactus and Succulent Society, New York City's premiere group of xerophiles and rare plant enthusiasts.</li> */}

          {/* <li>
            <Link to="/projects/lescss" className="project-title">wet.band</Link>
          </li>

          <li className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo sint sed officiis nihil illo nam deleniti ipsam. Aperiam harum eveniet accusantium illo adipisci praesentium non, soluta tempore minima veniam?</li> */}
        </ul>
      </div >
      <div className="sidebar-footer">
        <Link to="/resume" className="footer-link">Resume</Link>
        <span className="footer-link" onClick={() => handleExternalLink('https://github.com/joeyvalley')}> Github</span>
        <span className="footer-link" onClick={() => handleExternalLink('https://www.linkedin.com/in/joeyvalley/')}>Linkedin</span>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
    </div >
  );
}
