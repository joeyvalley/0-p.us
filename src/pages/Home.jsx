import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

export default function Home() {

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className={`video-overlay ${fadeIn ? '' : 'fade-in'}`}>
    </div>
  )
}