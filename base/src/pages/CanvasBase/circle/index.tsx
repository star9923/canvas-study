import React, { useRef, useEffect } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const Circle = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
    }
  };

  const drawStrokeCircle = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      // arc (x,y, 半径, 开始角度, 结束角度, anticlockwise) anticlockwise true 按逆时针方向绘制 false 按顺时针绘制
      // ctx.arc(80, 80, 50, 0, (180 * Math.PI) / 180, true);
      ctx.arc(80, 80, 50, 0, (180 * Math.PI) / 180, false);
      ctx.closePath();
      ctx.strokeStyle = 'skyblue';
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(120, 80, 50, 0, (360 * Math.PI) / 180, true);
      ctx.closePath();
      ctx.strokeStyle = 'hotpink';
      ctx.stroke();
    }
  };

  const drawFillCircle = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      // arc (x,y, 半径, 开始角度, 结束角度, anticlockwise) anticlockwise true 按逆时针方向绘制 false 按顺时针绘制
      // ctx.arc(80, 80, 50, 0, (180 * Math.PI) / 180, true);
      ctx.arc(80, 80, 50, 0, (180 * Math.PI) / 180, false);
      ctx.closePath();
      ctx.fillStyle = 'skyblue';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(120, 80, 50, 0, (360 * Math.PI) / 180, true);
      ctx.closePath();
      ctx.fillStyle = 'hotpink';
      ctx.fill();
    }
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, []);
  return (
    <div className={styles.circleContainer}>
      <Helmet title="圆形" />
      <div className={styles.actionContainer}>
        <span onClick={drawStrokeCircle}>描边圆</span>
        <span onClick={drawFillCircle}>填充圆</span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default Circle;
