import React, { useRef, useEffect } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const Circle = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, []);
  return (
    <div className={styles.circleContainer}>
      <div className={styles.actionContainer}>
        <span>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default Circle;
