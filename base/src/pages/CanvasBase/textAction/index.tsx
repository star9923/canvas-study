import React, { useEffect, useRef } from 'react';
import Helmet from '@/components/Helmet';
import { initCanvas, clearCanvas } from '@/utils/canvas';
import styles from './index.module.scss';

const textAction = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const clear = () => {
    if (canvasRef?.current) {
      clearCanvas(canvasRef?.current);
    }
  };

  // 空心文字
  const strokeText = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    /**
     * text 字符串文本
     * maxWidth 可选参数，表示允许的最大文本宽度
     */
    // strokeText(text, x, y, maxWidth)
    const text = `Text`;
    ctx!.font = `bold 30px 微软雅黑`;
    ctx!.strokeStyle = 'skyblue';
    ctx?.strokeText(text, 30, 60);
  };

  // 实心文字
  const fillText = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    /**
     * text 字符串文本
     * maxWidth 可选参数，表示允许的最大文本宽度
     */
    // fillText(text, x, y, maxWidth)
    const text = `Text`;
    ctx!.font = `bold 30px 微软雅黑`;
    ctx!.fillStyle = 'hotpink';
    ctx?.fillText(text, 30, 60);
  };

  const measureText = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    /**
     * 获取某个文本的长度
     */
    // const length = ctx?.measureText(text).width;
    const text = `Text`;
    ctx!.font = `bold 30px 微软雅黑`;
    ctx!.strokeStyle = 'skyblue';
    ctx?.strokeText(text, 30, 60);
    console.log(ctx?.measureText(text));
    const length = ctx?.measureText(text).width;
    ctx?.strokeText(String(length), 30, 90);
  };

  const centerDemo = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    const text = `Text`;
    ctx!.font = `bold 30px 微软雅黑`;
    ctx!.fillStyle = 'hotpink';
    const textWidth = ctx?.measureText(text).width;
    const canvasWidth = canvasRef?.current?.width;
    const xPosition = canvasWidth! / 2 - textWidth! / 2;
    console.log(xPosition);
    ctx?.fillText(text, xPosition, 60);
  };

  const showFont = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    const text = 'FONT';
    ctx!.font = `bold 30px 微软雅黑`;
    ctx!.fillStyle = 'hotpink';
    ctx?.fillText(text, 30, 60);
  };

  const showTextAlign = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx!.strokeStyle = 'green';
    ctx?.moveTo(150, 0);
    ctx?.lineTo(150, 200);
    ctx?.stroke();
    ctx!.font = `bold 15px 微软雅黑`;
    ctx!.fillStyle = 'hotpink';
    ctx!.textAlign = 'start';
    ctx?.fillText(`start`, 150, 30);
    ctx!.textAlign = 'left';
    ctx?.fillText(`left`, 150, 60);
    ctx!.textAlign = 'end';
    ctx?.fillText(`end`, 150, 90);
    ctx!.textAlign = 'right';
    ctx?.fillText(`right`, 150, 120);
    ctx!.textAlign = 'center';
    ctx?.fillText(`center`, 150, 150);
  };

  const showTextBaseLine = () => {
    clear();
    const ctx = canvasRef?.current?.getContext('2d');
    ctx!.strokeStyle = 'green';
    ctx?.moveTo(0, 100);
    ctx?.lineTo(300, 100);
    ctx?.stroke();
    ctx!.font = `bold 15px 微软雅黑`;
    ctx!.fillStyle = 'hotpink';
    ctx!.textBaseline = 'alphabetic';
    ctx?.fillText(`alphabetic`, 10, 100);
    ctx!.textBaseline = 'top';
    ctx?.fillText(`top`, 110, 100);
    ctx!.textBaseline = 'middle';
    ctx?.fillText(`middle`, 160, 100);
    ctx!.textBaseline = 'bottom';
    ctx?.fillText(`bottom`, 230, 100);
  };

  useEffect(() => {
    if (canvasRef?.current) {
      initCanvas(canvasRef?.current);
    }
  }, [canvasRef?.current]);

  return (
    <div className={styles.textActionContainer}>
      <Helmet title="文本操作" />
      <div className={styles.actionContainer}>
        <span onClick={strokeText}>strokeText方法</span>
        <span onClick={fillText}>fillText方法</span>
        <span onClick={measureText}>measureText方法</span>
        <span onClick={centerDemo}>文字居中demo</span>
        <span onClick={showFont}>font属性</span>
        <span onClick={showTextAlign}>textAlign属性</span>
        <span onClick={showTextBaseLine}>textBaseline属性</span>
        <span onClick={clear}>清空画布</span>
      </div>
      <canvas ref={canvasRef} className={styles.canvas}>
        该浏览器不支持canvas
      </canvas>
    </div>
  );
};

export default textAction;
