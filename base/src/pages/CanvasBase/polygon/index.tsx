import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import Helmet from '@/components/Helmet';
import styles from './index.module.scss';

const arrowJson = [
  { x: 100, y: 60 },
  { x: 100, y: 30 },
  { x: 150, y: 75 },
  { x: 100, y: 120 },
  { x: 100, y: 90 },
  { x: 40, y: 90 },
  { x: 40, y: 60 }
];

interface polygonTy {
  n: number | null;
  dx: number | null;
  dy: number | null;
  size: number | null;
}

const Polygon = () => {
  const [polygonDate, setPolygonDate] = useState<polygonTy>({
    n: null,
    dx: null,
    dy: null,
    size: null
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
    }
  };

  // 创建正多边形通用方法
  /**
   *
   * @param n 表示n边xing
   * @param dx 表示中心点x坐标
   * @param dy 表示中心点y坐标
   * @param size 表示n边形的大小
   */
  const createPolygon = (n: number, dx: number, dy: number, size: number) => {
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    const degree = (2 * Math.PI) / n;
    for (let i = 0; i < n; i++) {
      const x = Math.cos(i * degree);
      const y = Math.sin(i * degree);
      ctx?.lineTo(x * size + dx, y * size + dy);
    }
    ctx?.closePath();
  };

  const drawArrow = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(40, 60);
    arrowJson.forEach((item) => {
      ctx?.lineTo(item.x, item.y);
    });
    ctx?.closePath();
    ctx?.stroke();
  };

  const changePolygonValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value;
    const [n, dx, dy, size] = value.split(',');
    setPolygonDate({
      n: Number(n),
      dx: Number(dx),
      dy: Number(dy),
      size: Number(size)
    });
  };

  const drawPolygon = () => {
    clear();
    const { n, dx, dy, size } = polygonDate;
    const ctx = canvasRef?.current?.getContext('2d') as CanvasRenderingContext2D;
    createPolygon(n || 3, dx || 100, dy || 100, size || 50);
    ctx.fillStyle = 'skyblue';
    ctx?.fill();
  };

  const drawStar = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx?.lineTo(
        Math.cos(((18 + i * 72) * Math.PI) / 180) * 50 + 100,
        -Math.sin(((18 + i * 72) * Math.PI) / 180) * 50 + 100
      );
      ctx?.lineTo(
        Math.cos(((54 + i * 72) * Math.PI) / 180) * 25 + 100,
        -Math.sin(((54 + i * 72) * Math.PI) / 180) * 25 + 100
      );
    }
    ctx?.closePath();
    ctx?.stroke();
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, []);

  return (
    <div className={styles.polygonContainer}>
      <Helmet title="多边形"></Helmet>
      <div className={styles.actionContainer}>
        <span onClick={drawArrow}>箭头</span>
        <input
          type="text"
          style={{ marginRight: '10px' }}
          placeholder="请输入 n,dx,dy,size"
          onChange={(e) => changePolygonValue(e)}
        />
        <span onClick={drawPolygon}>绘制多边形</span>
        <span onClick={drawStar}>五角星</span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        改浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default Polygon;
