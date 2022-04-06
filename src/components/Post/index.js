// MODULES
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

// STYLES
import styles from './Post.module.scss';

function Post({ imgSrc = '', headline = '', desc = '', to = '#' }) {
  return (
    <div className={cn(styles['container'])}>
      <Link className={cn(styles['container-link'])} to="/posts/1">
        <img alt="Post Image" src={imgSrc} />

        <h2>{headline}</h2>

        <div className={cn(styles['desc'])}>{desc}</div>

        <Link className={cn(styles['read-more'])} to={to}>
          READ MORE {'>'}
        </Link>
      </Link>
    </div>
  );
}

export default Post;
