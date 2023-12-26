import '../style.css';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"

// Import pages
import Contact from '../pages/Contact';
import LESCSS from '../pages/LESCSS';
import NHT from '../pages/NHT';
import Frog from '../pages/Frog';
import Kaur from '../pages/Kaur';
import Resume from '../pages/Resume';
import Home from "../pages/Home";

import imageList from '../fetchedData.json';

export default function Content({ isPlaying }) {
  const resultArray = Object.keys(imageList).map(key => imageList[key].image_URL);
  const [image, setImage] = useState(resultArray[Math.floor(Math.random() * (resultArray.length - 1)) + 1]);

  function changeImage() {
    let randImage;
    do {
      randImage = resultArray[Math.floor(Math.random() * (resultArray.length - 1)) + 1];
    } while (randImage === image);
    setImage(randImage);
  };

  useEffect(() => {
    if (isPlaying) {
      const delayMin = Math.floor(Math.random() * 300) + 50;
      const delay = Math.floor(Math.random() * 50) + delayMin;
      const timer = setTimeout(changeImage, delay);
      return () => clearTimeout(timer);
    }
  }, [image, isPlaying]);

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
      <div className="video-container">
        <div></div>
        <img src={`${image}`} alt="Profile" className="fullscreen" />
      </div>
    </div>
  )
}