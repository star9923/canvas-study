import React, { LazyExoticComponent, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from '@/components/Loading/index';

const Home = React.lazy(() => import('@/pages/Home/index'));
const About = React.lazy(() => import('@/pages/About/index'));
const Canvas = React.lazy(() => import('@/pages/CanvasBase'));

interface RoutesTy {
  path: string;
  element: LazyExoticComponent<any>;
  title: string;
}

const routes: RoutesTy[] = [
  { path: '/', element: Home, title: '首页' },
  { path: '/about', element: About, title: '关于' },
  { path: '/canvas', element: Canvas, title: 'canvas' },
  { path: '/canvas/line', element: React.lazy(() => import('@/pages/CanvasBase/straightLine')), title: '直线' },
  { path: '/canvas/rect', element: React.lazy(() => import('@/pages/CanvasBase/rect')), title: '矩形' },
  { path: '/canvas/polygon', element: React.lazy(() => import('@/pages/CanvasBase/polygon')), title: '多边形' },
  { path: '/canvas/pallet', element: React.lazy(() => import('@/pages/CanvasBase/pallet')), title: '调色板' },
  { path: '/canvas/circle', element: React.lazy(() => import('@/pages/CanvasBase/circle')), title: '圆形' },
  { path: '/canvas/arc', element: React.lazy(() => import('@/pages/CanvasBase/arc')), title: '弧线' },
  { path: '/canvas/lineAction', element: React.lazy(() => import('@/pages/CanvasBase/lineAction')), title: '线条操作' },
  { path: '/canvas/textAction', element: React.lazy(() => import('@/pages/CanvasBase/textAction')), title: '文本操作' },
  {
    path: '/canvas/imageAction',
    element: React.lazy(() => import('@/pages/CanvasBase/imageAction')),
    title: '图片操作'
  }
];
const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes?.map((item: RoutesTy) => {
            return <Route key={item.path} path={item.path} element={<item.element />} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteConfig;
