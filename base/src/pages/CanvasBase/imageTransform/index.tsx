import React, { FC } from 'react';
import Helmet from '@/components/Helmet';
import styles from './index.module.scss';

const ImageTransform = () => {
  return (
    <div className={styles.imageTransformContainer}>
      <Helmet title='图片位移'/>
      <div className={styles.actionContainer}></div>
      <canvas className={styles.canvas}>该浏览器不支持canvas</canvas>
    </div>
  )
};

export default ImageTransform;