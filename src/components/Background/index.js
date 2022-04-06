// MODULES
import React, { useState, useEffect } from 'react';
import cn from 'classnames';

// STYLES
import styles from './Background.module.scss';

function Background({ imgSrc = '', videoSrc = '' }) {
  const [active, setActive] = useState(false);

  function activate() {
    setTimeout(() => {
      setActive(true);
    }, 500);
  }

  useEffect(() => {
    activate();
    window.addEventListener('load', activate);

    return () => {
      window.removeEventListener('load', activate);
    };
  }, [active]);

  return videoSrc ? (
    <>
      <video width="100%" height="100%" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={cn(styles['video-filter'])} />
    </>
  ) : (
    <img
      className={cn(styles['img'], active ? styles['active-img'] : null)}
      src={imgSrc}
      alt="Background"
    />
  );
}

export default Background;
