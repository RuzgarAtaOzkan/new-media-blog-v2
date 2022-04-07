// MODULES
import React from 'react';
import cn from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';

// COMPONENTS
import Header from '../../components/Header';
import Background from '../../components/Background';
import Post from '../../components/Post';

// STYLES
import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <section className={styles['intro-section']}>
        <h1 className={cn(styles['blog-title'])}>Ruzgar Ata Ozkan's Blog</h1>

        <div className={styles['intro-img']}>
          <img src="/assets/images/profile-1.JPG" />
        </div>

        <h1>About The Blog</h1>
        <div className={styles['intro']}>
          <div className={cn(styles['posts'])}>
            <h2 className={cn(styles['title'])}>
              Posts <IoIosArrowDown />
            </h2>

            <Post
              imgSrc="/assets/images/first-gocmen.jpg"
              headline="Esnaf Gocmenlerden Sikayetci"
              desc=""
              to="/posts/1"
            />
            <Post
              imgSrc="/assets/images/profile.JPG"
              headline="Esnaf Gocmenlerden Sikayetci"
              desc="Beylikduzu esnaflar ile yaptigimiz roportaj ve aldigimi.ac est feugiat, nec malesuada dui ullamcorper. In
              velit nunc, facilisis nec volutpat non, lacinia quis turpis.
              Vivamus sed nunc eu massa posue.."
              to="/posts/1"
            />
            <Post
              imgSrc="/assets/images/profile.JPG"
              headline="Esnaf Gocmenlerden Sikayetci"
              desc="Beylikduzu esnaflar ile yaptigimiz roportaj ve aldigimi.ac est feugiat, nec malesuada dui ullamcorper. In
              velit nunc, facilisis nec volutpat non, lacinia quis turpis.
              Vivamus sed nunc eu massa posue.."
              to="/posts/1"
            />
          </div>

          <div className={cn(styles['text'])}>
            <h2>The News</h2>
            <p>
              ollis pulvinar consectetur, sem elit viverra nisi, in consequat
              velit ligula quis metus. Fusce vehicula lacus risus, a pharetra
              urna volutpat at. Nam egestas ex tortor, porttitor malesuada ipsum
              molestie at. Quisque a dui nec velit aliquam tincidunt id at
            </p>
            <h2>About</h2>
            <p>
              Vivamus tristique fermentum maximus. Pellentesque pulvinar, enim
              mollis pulvinar consectetur, sem elit viverra nisi, in consequat
              velit ligula quis metus. Fusce vehicula lacus risus, a pharetra
              urna volutpat at. Nam egestas ex tortor, porttitor malesuada ipsum
              molestie at. Quisque a dui nec velit aliquam tincidunt id at
            </p>
            <h2>Posts</h2>
            <p>
              rra ligula convallis. Praesent ultrices varius placerat. Donec
              mattis velit ac est feugiat, nec malesuada dui ullamcorper. In
              velit nunc, facilisis nec volutpat non, lacinia quis turpis.
              Vivamus sed nunc eu massa posuere feugiat. Suspendisse luctus
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
