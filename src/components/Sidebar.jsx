import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../style.css';


export default function Sidebar() {

  const rand = Math.floor(Math.random() * 5) + 1;
  const [infoHeight, setInfoHeight] = useState('auto');

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

  return (
    <div className="sidebar">
      <div className="profile-photo-container">
        <img alt="profile" className="profile-photo" src={`/assets/img/profile/${rand}.jpg`} />
      </div>
      <div className="info" style={{ height: infoHeight, overflow: 'auto', padding: '0.5rem 1rem 0rem' }}>
        <Link to="/" className="my-name">
          <span>Joseph Valle</span>
        </Link>
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
          <li className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum illum corrupti accusantium quidem aperiam excepturi ut ullam cum officiis accusamus, quaerat incidunt delectus repellendus laudantium aut eveniet veritatis temporibus perferendis?</li>

          <li>
            <Link to="/" className="project-title">kauraccounting.com</Link>
          </li>
          <li className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident corporis dicta repellat et quibusdam quasi autem. At quam eaque ut distinctio, praesentium officia nobis, iure magni veniam perspiciatis nemo?</li>


          <li>
            <Link to="/projects/lescss" className="project-title">lescss.org</Link>
          </li>

          <li className="description">Fully responsive and certified dirt-style website for the Lower East Side Cactus and Succulent Society, New York City's premiere group of xerophiles and rare plant enthusiasts.</li>

          <li>
            <Link to="/projects/lescss" className="project-title">wet.band</Link>
          </li>

          <li className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, explicabo sint sed officiis nihil illo nam deleniti ipsam. Aperiam harum eveniet accusantium illo adipisci praesentium non, soluta tempore minima veniam?</li>
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
