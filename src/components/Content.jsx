import { Route, Routes } from "react-router-dom"
import '../style.css';

// Import pages
import Contact from '../pages/Contact';
import LESCSS from '../pages/LESCSS';
import NHT from '../pages/NHT';
import Frog from '../pages/Frog';
import Kaur from '../pages/Kaur';
import Resume from '../pages/Resume';
import Home from "../pages/Home";

export default function Content() {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/lescss" element={<LESCSS />} />
        <Route path="/projects/nonhuman-teachers" element={<NHT />} />
        <Route path="/projects/fr-0gg" element={<Frog />} />
        <Route path="/projects/kaur-accounting" element={<Kaur />} />
        <Route path="/projects/wet" element={<Frog />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
      {/* <video src="/assets/video/wet.mp4" autoPlay={true} controls={false} muted={true} loop={true} className='fullscreen'></video> */}
    </div>
  )
}