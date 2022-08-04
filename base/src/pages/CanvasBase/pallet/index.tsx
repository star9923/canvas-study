import React, { useRef, useEffect } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const Pallet = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
    }
  };

  const drawRectPallet = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (ctx) {
          ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j)}, 0)`;
          ctx.fillRect(j * 25, i * 25, 25, 25);
        }
      }
    }
  };

  const drawGradualPallet = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    let r = 255;
    let g = 0;
    let b = 0;
    for (let i = 0; i < 150; i++) {
      if (i < 25) {
        g += 10;
      } else if (i >= 25 && i < 50) {
        r -= 10;
      } else if (i >= 50 && i < 75) {
        g -= 10;
        b += 10;
      } else if (i >= 75 && i < 100) {
        r += 10;
      } else {
        b -= 10;
      }
      if (ctx) {
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx?.fillRect(3 * i, 0, 3, 450);
      }
    }
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, [canvasRef?.current]);

  return (
    <div className={styles.palletContainer}>
      <Helmet title="调色板" />
      <div className={styles.actionContainer}>
        <span onClick={clear}>清空画布</span>
        <span onClick={drawRectPallet}>方格调色板</span>
        <span onClick={drawGradualPallet}>渐变调色版</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        改浏览器不支持canvas{' '}
      </canvas>
    </div>
  );
};

export default Pallet;
