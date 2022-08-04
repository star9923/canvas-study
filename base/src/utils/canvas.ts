// 初始化canvas画布
const initCanvas = (canvasDom: HTMLCanvasElement) => {
  const canvas = canvasDom;
  const width = window.innerWidth - 50;
  const height = window.innerHeight - 60;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width;
  canvas.height = height;
};

// 清空画布
const clearCanvas = (canvasDom: HTMLCanvasElement) => {
  const canvas = canvasDom;
  const ctx = canvas.getContext('2d');
  ctx?.clearRect(0, 0, canvas.width, canvas.height);
};

export { initCanvas, clearCanvas };
