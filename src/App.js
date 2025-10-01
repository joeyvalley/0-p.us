import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';
import Mobile from './components/Mobile.jsx';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [newVisitor, setNewVisitor] = useState(true);
  const [playing, setPlaying] = useState(true);
  console.log("fuck")

  function updateStyle() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }

  function handleNewVisitorChange(newValue) {
    setNewVisitor(newValue);
  }

  function handlePlayingChange(newValue) {
    setPlaying(newValue);
  }

  useEffect(() => {
    updateStyle();
    function handleResize() {
      updateStyle();
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <>
      {isLoaded ?
        (
          isMobile ? (
            <div className="mobile-wrapper">
              <Mobile newVisitor={newVisitor} onNewVisitorChange={handleNewVisitorChange} />
            </div>
          ) : (
            <div className="wrapper">
              {/* <Sidebar onPlayingChange={handlePlayingChange} /> */}
              <Content isPlaying={playing} />
            </div>
          )
        )
        :
        (
          <div className="loader">
            <div className="spinner">&#9881;</div >
          </div >
        )
      }
    </>
  );
}

export default App;
