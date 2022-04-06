// MODULES
import React, { useEffect } from 'react';
import cn from 'classnames';

// COMPONENTS
import Header from '../../Header';
import Background from '../../Background';

// STYLES
import styles from './Post.module.scss';

function PostLayout({ element }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className={cn(styles['post-layout'])}>{element}</main>
    </>
  );
}

export default PostLayout;
