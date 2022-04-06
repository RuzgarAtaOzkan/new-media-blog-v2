// MODULES
import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// STYLES
import styles from './Slider.module.scss';

function Slider({ imgSrcs = [], title = '' }) {
  const [index, setIndex] = useState(0);
  const imagesRef = useRef();

  return (
    <div className={cn(styles['container'])}>
      <div ref={imagesRef} className={cn(styles['images'])}>
        {imgSrcs.map((current, index) => {
          return <img key={index} src={current} />;
        })}
      </div>

      <IoIosArrowBack
        onClick={() => {
          if (index === 0) {
          } else {
            imagesRef.current.scrollLeft =
              imagesRef.current.scrollLeft -
              imagesRef.current.children[index].width;

            setIndex(index - 1);
          }
        }}
        className={cn(styles['left-arrow'])}
      />
      <IoIosArrowForward
        onClick={() => {
          if (index + 1 === imagesRef.current.children.length) {
          } else {
            imagesRef.current.scrollLeft =
              imagesRef.current.scrollLeft +
              imagesRef.current.children[index].width;

            setIndex(index + 1);
          }
        }}
        className={cn(styles['right-arrow'])}
      />

      <div className={cn(styles['title'])}>{title}</div>
    </div>
  );
}

export default Slider;
