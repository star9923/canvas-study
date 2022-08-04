import React, { useEffect, useRef } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const Rect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
    }
  };

  const drawStrokeRect = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    // ctx.strokeStyle = `#FF0000`;
    // ctx.strokeStyle = `red`;
    // ctx.strokeStyle = `rgb(255, 0, 0)`;
    ctx.strokeStyle = `rgba(255, 0, 0, .8)`;
    ctx.strokeRect(50, 50, 80, 80);
  };

  const drawFillRect = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = 'Skyblue';
    ctx.fillRect(50, 50, 80, 80);
  };

  const drawDoubleRect = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    ctx.strokeStyle = 'red';
    ctx.strokeRect(50, 50, 80, 80);
    ctx.fillStyle = 'Skyblue';
    ctx.fillRect(50, 50, 80, 80);
  };

  const drawOverlapRect = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 80, 80);
    ctx.fillStyle = `rgba(0, 0, 255, .3)`;
    ctx.fillRect(30, 30, 80, 80);
  };

  const drawRectStroke = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    ctx.strokeStyle = `#FF0000`;
    ctx.rect(50, 50, 80, 80);
    ctx.stroke();
  };

  const drawRectFill = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    ctx.fillStyle = `#FF0000`;
    ctx.rect(50, 50, 80, 80);
    ctx.fill();
  };

  const drawRectStrokeFill = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    ctx.strokeStyle = `#FF0000`;
    ctx.rect(50, 50, 80, 80);
    ctx.stroke();
    ctx.fillStyle = `skyblue`;
    ctx.rect(50, 50, 80, 80);
    ctx.fill();
  };

  const clearRect = () => {
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.clearRect(60, 60, 50, 50);
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <div className={styles.rectContainer}>
      <Helmet title="矩形" />
      <div className={styles.actionContainer}>
        <span onClick={drawStrokeRect}>描边矩形</span>
        <span onClick={drawFillRect}>填充矩形</span>
        <span onClick={drawDoubleRect}>绘制2种矩形</span>
        <span onClick={drawOverlapRect}>重叠矩形</span>
        <span onClick={drawRectStroke}>rect+stroke</span>
        <span onClick={drawRectFill}>rect+fill</span>
        <span onClick={drawRectStrokeFill}>react+stroke+fill</span>
        <span onClick={clearRect}>清空指定矩形</span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default Rect;
