import React, { useEffect, useRef } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const Arc = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
      const ctx = canvasRef?.current?.getContext('2d');
      ctx?.setLineDash([]);
      ctx!.strokeStyle = 'black';
      ctx!.lineWidth = 2;
    }
  };

  /**
   * 绘制弧线
   */
  const drawArc = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.arc(70, 70, 50, 0, (-90 * Math.PI) / 180, true);
    // ctx?.closePath(); // 弧线闭合
    // ctx?.moveTo(120, 70);
    // ctx?.lineTo(120, 120);
    ctx?.stroke();
  };

  /**
   * 绘制弧线
   */
  const drawArcTo = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    /**
     * cx,xy 中心点
     * x2,y2 目标点
     * radius 半径
     */
    // ctx?.arcTo(cx,cy,x2,y2,radius);
    ctx?.moveTo(20, 20);
    ctx?.lineTo(70, 20);
    ctx?.arcTo(120, 20, 120, 70, 50);
    ctx?.lineTo(120, 120);
    ctx?.stroke();

    ctx?.closePath();
  };

  /**
   *
   * @param ctx canvas绘制画布
   * @param offsetX 顶点X坐标
   * @param offsetY 顶点Y坐标
   * @param r 圆角半径
   * @param width 长
   * @param height 宽
   */
  const createRoundRect = (
    ctx: CanvasRenderingContext2D,
    offsetX: number,
    offsetY: number,
    r: number,
    width: number,
    height: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(offsetX + r, offsetY);
    ctx.lineTo(offsetX + width - r, offsetY);
    ctx.arcTo(offsetX + width, offsetY, offsetY + width, offsetY + r, r);
    ctx.lineTo(offsetX + width, offsetY + height - r);
    ctx.arcTo(offsetX + width, offsetY + height, offsetX + width - r, offsetY + height, r);
    ctx.lineTo(offsetX + r, offsetY + height);
    ctx.arcTo(offsetX, offsetY + height, offsetX, offsetY + height - r, r);
    ctx.lineTo(offsetX, offsetY + r);
    ctx.arcTo(offsetX, offsetY, offsetX + r, offsetY, r);
    ctx.closePath();
  };

  /**
   * 圆角矩形
   */
  const drawRoundRect = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx && createRoundRect(ctx, 20, 20, 20, 120, 100);
    // ctx?.beginPath();
    // ctx?.moveTo(40, 20);
    // ctx?.lineTo(160, 20);
    // ctx?.arcTo(180, 20, 180, 40, 20);
    // ctx?.moveTo(180, 40);
    // ctx?.lineTo(180, 110);
    // ctx?.arcTo(180, 130, 160, 130, 20);
    // ctx?.moveTo(160, 130);
    // ctx?.lineTo(40, 130);
    // ctx?.arcTo(20, 130, 20, 110, 20);
    // ctx?.moveTo(20, 110);
    // ctx?.lineTo(20, 40);
    // ctx?.arcTo(20, 20, 40, 20, 20);

    // 绘制效果
    ctx!.strokeStyle = 'green';
    ctx?.stroke();

    ctx!.fillStyle = 'hotpink';
    ctx?.fill();
  };

  /**
   * 二次贝塞尔曲线
   */
  const drawQuadraticCurve = () => {
    clear();
    const ctx: CanvasRenderingContext2D | null | undefined = canvasRef?.current?.getContext('2d');
    /**
     * cx, cy 控制点的坐标
     * x2, y2 结束点点坐标
     */
    // ctx?.quadraticCurveTo(cx, cy, x2, y2);
    ctx?.beginPath();
    ctx?.moveTo(30, 120);
    ctx?.quadraticCurveTo(100, 20, 160, 120);
    ctx?.stroke();
    ctx?.closePath();

    ctx?.beginPath();
    ctx?.moveTo(30, 120);
    ctx?.lineTo(100, 20);
    ctx?.lineTo(160, 120);
    ctx!.lineWidth = 2;
    ctx!.strokeStyle = 'blue';
    ctx?.setLineDash([4, 8]);
    ctx!.lineDashOffset = -10;
    ctx?.stroke();
    ctx?.closePath();
  };

  const drawBubble = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(75, 25);
    ctx?.quadraticCurveTo(25, 25, 25, 62);
    ctx?.quadraticCurveTo(25, 100, 50, 100);
    ctx?.quadraticCurveTo(50, 120, 30, 125);
    ctx?.quadraticCurveTo(60, 120, 65, 100);
    ctx?.quadraticCurveTo(125, 100, 125, 62);
    ctx?.quadraticCurveTo(125, 25, 75, 25);
    ctx?.closePath();
    ctx?.stroke();
  };

  /**
   * 三次贝塞尔曲线
   */
  const drawBezierCurveTo = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    /**
     *  控制点1 (cx1, cy1)
     *  控制点2 (cx2, cy2)
     *  结束点 (x, y)
     */
    // ctx?.bezierCurveTo(cx1,cy1,cx2,cy2,x,y)
    ctx?.beginPath();
    ctx?.moveTo(20, 80);
    ctx?.bezierCurveTo(20, 20, 120, 120, 120, 60);
    ctx?.stroke();
    ctx?.closePath();
  };

  /**
   * 爱心
   */
  const drawLovingHeart = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(75, 40);
    ctx?.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx?.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx?.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx?.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx?.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx?.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx?.stroke();
    ctx?.closePath();
  };

  const createLeaf = (
    ctx: CanvasRenderingContext2D,
    n: number,
    dx: number,
    dy: number,
    size: number,
    length: number
  ) => {
    ctx?.beginPath();
    ctx?.moveTo(dx, dy + size);
    const degree = (2 * Math.PI) / n;
    for (let i = 1; i < n + 1; i++) {
      const cx1 = Math.sin((i - 1) * degree) * length + dx;
      const cy1 = Math.cos((i - 1) * degree) * length + dy;
      const cx2 = Math.sin(i * degree) * length + dx;
      const cy2 = Math.cos(i * degree) * length + dy;
      // 计算结束点
      const x = Math.sin(i * degree) * size + dx;
      const y = Math.cos(i * degree) * size + dy;
      ctx?.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
    }
    ctx?.closePath();
  };

  const drawLeft = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    createLeaf(ctx!, 4, 200, 200, 20, 80);
    ctx?.stroke();
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, [canvasRef?.current]);

  return (
    <div className={styles.arcContainer}>
      <Helmet title="弧形" />
      <div className={styles.actionContainer}>
        <span onClick={drawArc}>绘制弧线</span>
        <span onClick={drawArcTo}>绘制弧线(arcTo)</span>
        <span onClick={drawRoundRect}>圆角矩阵</span>
        <span onClick={drawQuadraticCurve}>二次贝塞尔曲线</span>
        <span onClick={drawBubble}>气泡</span>
        <span onClick={drawBezierCurveTo}>三次贝塞尔曲线</span>
        <span onClick={drawLovingHeart}>爱心</span>
        <span onClick={drawLeft}>绘制N叶草</span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default Arc;
