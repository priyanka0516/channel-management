import React, { useEffect, useState } from 'react';


const Ticker = ({ logos, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, interval);

    return () => {
      clearInterval(tickerInterval);
    };
  }, [logos, interval]);

  return (
    <div className="ticker">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index}`}
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Ticker;
