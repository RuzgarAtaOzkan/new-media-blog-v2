// MODULES
import React, { useEffect, useState } from 'react';
import { GiTreeBranch } from 'react-icons/gi';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
} from 'react-icons/ai';
import cn from 'classnames';
import { Link } from 'react-router-dom';

// STYLES
import styles from './Header.module.scss';

function Header() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [postsDropdown, setPostsDropdown] = useState(false);

  function onScroll() {
    if (window.pageYOffset > 80 && !navScrolled) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header>
      <nav className={cn(navScrolled ? styles['nav-scrolled'] : null)}>
        <div className={styles['logo-title']}>
          <GiTreeBranch />
          <Link to="/">
            <h1>Blog</h1>
          </Link>
        </div>

        <div className={styles['nav']}>
          <div
            onMouseEnter={() => {
              setPostsDropdown(true);
            }}
            onMouseLeave={() => {
              setPostsDropdown(false);
            }}
            onClick={() => {
              setPostsDropdown(true);
            }}
            className={styles['posts-btn']}
          >
            POSTS
            <div
              className={cn(
                styles['posts'],
                postsDropdown ? styles['posts-active'] : null
              )}
            >
              <div className={cn(styles['post'])}>
                <Link to="/posts/1">Post 1</Link>
              </div>
              <div className={cn(styles['post'])}>
                <Link to="/posts/2">Post 2</Link>
              </div>
              <div className={cn(styles['post'])}>
                <Link to="/posts/3">Post 3</Link>
              </div>
            </div>
          </div>

          <div>
            <Link to="/about">ABOUT</Link>
          </div>
        </div>

        <div className={cn(styles['socials'])}>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/RuzgarAtaOzkan"
            >
              <AiOutlineTwitter />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/ruzgarataozkan"
            >
              <AiFillInstagram />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/ruzgarataozkan"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
