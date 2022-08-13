import React, { useRef, useEffect } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const Line = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
    }
  };

  const showLineWidth = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    // lineWidth 为 5 我们必须使用beginPath()方法来开始一个新的路径，才可以定义一个新的lineWidth属性。
    ctx?.beginPath();
    ctx!.lineWidth = 5;
    ctx?.moveTo(20, 20);
    ctx?.lineTo(180, 20);
    ctx?.stroke();
    // lineWidth 为 10
    ctx?.beginPath();
    ctx!.lineWidth = 10;
    ctx?.moveTo(20, 40);
    ctx?.lineTo(180, 40);
    ctx?.stroke();
    // lineWidth 为 15
    ctx?.beginPath();
    ctx!.lineWidth = 15;
    ctx?.moveTo(20, 60);
    ctx?.lineTo(180, 60);
    ctx?.stroke();
    ctx?.closePath();
  };

  const showLineCap = () => {
    // 定义线条开始和结束的时候线帽效果
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, [canvasRef?.current]);

  return (
    <div className={styles.lineContainer}>
      <Helmet title="线条操作" />
      <div className={styles.actionContainer}>
        <span onClick={showLineWidth}>lineWidth属性效果</span>
        <span onClick={showLineCap}>lineCap属性效果</span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default Line;
