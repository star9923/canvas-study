import React, { useEffect, useRef } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const Line = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef.current);
    }
  };

  const drawLine = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(50, 100);
    ctx?.lineTo(150, 50);
    ctx?.stroke();
    ctx?.closePath();
  };

  const drawManyLine = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(50, 50);
    ctx?.lineTo(100, 50);
    // lineTo 与 moveTo 的区别
    ctx?.moveTo(50, 100);
    // ctx?.lineTo(50, 100);
    ctx?.lineTo(100, 100);
    ctx?.stroke();
    ctx?.closePath();
  };

  const drawTriangle = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(50, 100);
    ctx?.lineTo(150, 50);
    // lineTo 与 moveTo 的区别
    // ctx?.moveTo(50, 100);
    ctx?.lineTo(150, 100);
    ctx?.lineTo(50, 100);
    ctx?.stroke();
    ctx?.closePath();
  };

  const drawRect = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(50, 100);
    ctx?.lineTo(50, 50);
    ctx?.lineTo(150, 50);
    ctx?.lineTo(150, 100);
    ctx?.lineTo(50, 100);
    ctx?.stroke();
    ctx?.closePath();
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div className={styles.straightLineContainer}>
      <Helmet title="直线"></Helmet>
      <div className={styles.actionContainer}>
        <span onClick={drawLine}>一条直线</span>
        <span onClick={drawManyLine}>多条直线</span>
        <span onClick={drawTriangle}>直线三角形</span>
        <span onClick={drawRect}>直线矩形 </span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default Line;
