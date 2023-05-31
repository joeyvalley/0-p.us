import { Link } from "react-router-dom";

export default function Sidebar() {

  function handleLink(URL) {
    window.open(URL, '_blank');
  }

  return (
    <div className="sidebar">
      <div className="profile-photo-container">
        <img alt="profile" className="profile-photo" src={`./assets/img/profile/7.jpg`} />
      </div>
      <div className="info">
        <h1>Joseph Valle (b. 1988)</h1>
        <span className="description">Non-disciplinary artist and software engineer currently based in New York City.</span>
        <h2>Selected Projects</h2>
        <ul>
          <li className="project-title">
            <Link to="/projects/nonhuman-teachers">nonhumanteachers.org&nbsp;</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true" data-v-069f367b="">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description">React-based website for Nonhuman Teachers, an ecologically-minded non-profit group based in Los Angeles.</li>
          <li className="project-title">
            <Link to="/projects/wet">wet.band&nbsp;</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description">Desktop and mobile website for Wet, the band formerly known as the future of pop. This is one of the first sites I made so be nice.</li>
          <li className="project-title">
            <Link to="/projects/lescss">lescss.org&nbsp;</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description">Fully responsive and certified dirt-style website for the Lower East Side Cactus and Succulent Society, New York City's premiere group of xerophiles and rare plant enthusiasts.</li>
          <li className="project-title">
            <Link to="/projects/f-r0gg">f-r0.gg&nbsp;</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description-bottom">Web application that generates a unique sculpture everyday. I love <span class="footer-link" onClick={() => handleLink('https://www.midjourney.com/app/users/3e74402f-56cd-46c9-81a3-c7b99c4e85d2/')}>Midjourney</span>.</li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <span className="footer-link" onClick={() => handleLink('')}>Resume</span>
        <span className="footer-link" onClick={() => handleLink('https://github.com/joeyvalley')} > Github</span>
        <span className="footer-link" onClick={() => handleLink('https://www.linkedin.com/in/joeyvalley/')}>Linkedin</span>
        <span className="footer-link" onClick={() => handleLink('mailto:josephrvalle@gmail.com')}>Contact</span>
      </div>
    </div >
  );
}
