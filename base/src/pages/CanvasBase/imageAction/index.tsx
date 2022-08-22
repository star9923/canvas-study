import React, { useEffect, useRef } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import head from './image/head.png';
import styles from './index.module.scss';

const ImageAction = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
    }
  };

  // 绘制图片
  const drawImage = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    /**
     * 语法
     * Image javaScript中的Image对象
     *  s source（源图片）d destination（目标图片）
     * （sx，sy）源图片被截取左上角的横竖坐标
     *  sw 定义被截取的宽度
     *  sh 定义被截取的高度
     * （dx，dy）图片左上角的横竖坐标
     *  dw 定义图片的宽度
     *  dh 定义图片的高度
     */
    // ctx?.drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh)
    const image = new Image();
    image.src = head;
    image.onload = () => {
      ctx?.drawImage(image, 0, 0, 200, 200);
      ctx?.drawImage(image, 250, 0);
      ctx?.drawImage(image, 20, 20, 50, 50, 450, 0, 200, 200);
    };
  };

  // 平铺图片
  const createPattern = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    /**
     *  createPattern image表示被平铺的图片 type表示被平铺的方式
     *  type
     *  repeat 默认值
     *  repeat-x 水平方向平铺
     *  repeat-y 垂直方向平铺
     *  no-repeat 只显示一次 不平铺
     */
    // const pattern = ctx?.createPattern(image, type);
    // ctx!.fillStyle = pattern;
    // ctx?.fillRect();
    const image = new Image();
    image.src = head;
    image.onload = () => {
      const pattern: CanvasPattern = ctx?.createPattern(image, 'repeat') as CanvasPattern;
      ctx!.fillStyle = pattern;
      ctx?.fillRect(0, 0, canvasRef?.current?.width as number, canvasRef?.current?.height as number);
    };
  };

  const clip = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(70, 70, 70, 0, (360 * Math.PI) / 180, true);
      ctx.closePath();
      ctx?.stroke();
      ctx.clip();
      const image = new Image();
      image.src = head;
      image.onload = () => {
        ctx?.drawImage(image, 0, 0, 140, 140);
      };
    }
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, [canvasRef?.current]);
  return (
    <div className={styles.imageActionContainer}>
      <Helmet title="图片操作" />
      <div className={styles.actionContainer}>
        <span onClick={drawImage}>绘制图片</span>
        <span onClick={createPattern}>平铺图片</span>
        <span onClick={clip}>切割图片</span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default ImageAction;
