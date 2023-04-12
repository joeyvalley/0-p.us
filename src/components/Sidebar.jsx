import { useEffect, useState } from "react";

export default function Sidebar() {
  const [randImg, setRandImg] = useState(1)

  useEffect(() => {
    const randImg = Math.floor(Math.random() * 9) + 1;
    setRandImg(randImg)
  }, [])


  return (
    <div className="sidebar">
      <div className="profile-photo-container">
        <img alt="profile" className="profile-photo" src={`./assets/img/profile/${randImg}.jpg`} />
      </div>
      <div className="info">
        <h1>Joseph Valle</h1>
        <h2>I'm a software engineer and designer currently based in New York City, NY.</h2>
        <h2><span className="h2-link">Resume</span></h2>
        <h2>Selected Projects:</h2>
        <ul>
          <li className="project-title">
            Nonhuman Teachers&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true" data-v-069f367b="">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description">React-based website for Nonhuman Teachers, an ecologically-minded non-profit group based in Los Angeles.</li>
          <li className="project-title">
            Wet&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description">Desktop and mobile website for Wet, the band formerly known as the future of pop.</li>
          <li className="project-title">
            LESCSS&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description">Fully responsive website for the Lower East Side Cactus and Succulent Society, New York City's premiere group of xerophiles and rare plant enthusiasts.</li>
          <li className="project-title">
            f-r0.gg&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="arrow-link-small" aria-hidden="true">
              <polygon fill="currentColor" points="5 4.31 5 5.69 9.33 5.69 2.51 12.51 3.49 13.49 10.31 6.67 10.31 11 11.69 11 11.69 4.31 5 4.31">
              </polygon>
            </svg>
          </li>
          <li className="description-bottom">Web application that generates a unique sculpture everyday.</li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <span className="footer-link">Github</span>
        <span className="footer-link">Linkedin</span>
        <span className="footer-link">Instagram</span>
        <span className="footer-link">Contact</span>
      </div>
    </div >
  );
}
