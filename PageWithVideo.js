import React, { useState, useEffect } from 'react';
import './PageWithVideo.css'; // Import your own CSS file

const PageWithVideo = ({ videoSrc, children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-with-video">
      <div className="background-video">
        <video autoPlay loop muted src={videoSrc} style={{ transform: `translateY(-${scrollPosition}px)` }} />
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default PageWithVideo;
