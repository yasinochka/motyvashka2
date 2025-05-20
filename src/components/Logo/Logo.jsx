
import React from 'react';

const Logo = ({ src, className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img
      src={src}
      alt="logo"
      className={className}
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Logo;
