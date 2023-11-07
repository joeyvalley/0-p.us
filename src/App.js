import './App.css';
import { Routes, Route } from 'react-router-dom'

// Import components
import Sidebar from './components/Sidebar';
import Video from './components/Video';

// Import pages
import Contact from './pages/Contact';
import Instargam from './pages/Instargam';
import Home from './pages/Home';
import LESCSS from './pages/LESCSS';
import NHT from './pages/NHT';
import Resume from './pages/Resume';
import Wet from './pages/Wet';

function App() {
  return (
    <>
      <Sidebar />
      <Video />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/instargam" element={<Instargam />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects/lescss" element={<LESCSS />} />
        <Route path="/projects/nonhuman-teachers" element={<NHT />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/wet" element={<Wet />} />
      </Routes>
    </>
  );
}

export default App;
