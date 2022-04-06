// MODULES
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

// COMPONENTS
import Slider from '../../components/Slider';

// STYLES
import styles from './Post1.module.scss';

function Post1() {
  return (
    <>
      <section className={cn(styles['post-section'])}>
        <h1 className={cn(styles['blog-title'])}>Posts</h1>
        <div className={cn(styles['post'])}>
          <Slider
            imgSrcs={[
              '/assets/images/profile.JPG',
              '/assets/images/profile-1.JPG',
            ]}
            title="Esnaf asdfs s f sd fsdf f"
          />
          {/** 
             * 
             * 
             * <div className={cn(styles['news-pic-area'])}>
            <img
              className={cn(styles['news-pic'])}
              src="/assets/images/profile-1.JPG"
              alt="News Picture"
            />
            <div className={cn(styles['news-pic-title-area'])}>
              <div className={cn(styles['title'])}>
                Esenyurt Esnafi Gocmen Esnaflardan Sikayetci
              </div>
            </div>
          </div>
            */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
          euismod ligula. Suspendisse lectus quam, faucibus in imperdiet vel,
          pellentesque at felis. Quisque gravida pharetra orci, ac sodales diam
          sollicitudin nec. Morbi nec porta ipsum
        </div>
      </section>
    </>
  );
}

export default Post1;
