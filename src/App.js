import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Mobile from './components/Mobile';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function updateStyle() {
    window.innerWidth <= 800 ? setIsMobile(true) : setIsMobile(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }

  useEffect(() => {
    // Initial call when the component mounts
    updateStyle();

    // Function to handle window resize
    function handleResize() {
      updateStyle();
    }

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this runs once on mount and on unmount



  return (
    <>
      {isLoaded ?
        (
          isMobile ? (
            <div className="mobile-wrapper">
              <Mobile />
            </div>
          ) : (
            <div className="wrapper">
              <Sidebar />
              <Content />
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
