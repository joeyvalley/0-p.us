import './App.css';
import { Routes, Route } from 'react-router-dom'
import Frog from './pages/Frog';
import Home from './pages/Home';
import LESCSS from './pages/LESCSS';
import NHT from './pages/NHT';
import Wet from './pages/Wet';

function App() {
  return (
    <Routes>
      <Route path="/projects/f-r0gg" element={<Frog />} />
      <Route path="/" element={<Home />} />
      <Route path="/projects/lescss" element={<LESCSS />} />
      <Route path="/projects/nonhuman-teachers" element={<NHT />} />
      <Route path="/projects/wet" element={<Wet />} />
    </Routes>
  );
}

export default App;
