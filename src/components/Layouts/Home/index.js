// MODULES
import React, { useEffect } from 'react';
import cn from 'classnames';

// COMPONENTS
import Header from '../../Header';
import Background from '../../Background';

// STYLES
import styles from './Home.module.scss';

function HomeLayout({ element }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className={cn(styles['home-layout'])}>
        <Background videoSrc="/assets/videos/background.mp4" />
        {element}
      </main>
    </>
  );
}

export default HomeLayout;
