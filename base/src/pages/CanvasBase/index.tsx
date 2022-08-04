import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '@/components/Helmet';
import styles from './index.module.scss';

interface linkTy {
  path: string;
  key: string;
  message: string;
}

const linkObj: linkTy[] = [
  { path: '/canvas/line', key: 'line', message: '直线' },
  { path: '/canvas/rect', key: 'rect', message: '矩形' },
  { path: '/canvas/polygon', key: 'polygon', message: '多边形' },
  { path: '/canvas/pallet', key: 'pallet', message: '调色板' }
];

const Canvas = () => {
  return (
    <div>
      <Helmet title="Canvas" />
      {linkObj.map((item: linkTy) => (
        <Link key={item.key} to={item.path} className={styles.link}>
          {item.message}
        </Link>
      ))}
    </div>
  );
};

export default Canvas;
