import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import style from './Layout.module.scss';

const Layout: FC = () => {
  return (
    <div className={style.wrapper}>
      <header
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '1rem 2rem',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        header
      </header>
      <main style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Outlet />
      </main>
      <footer
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '1.5rem 2rem',
          textAlign: 'center',
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        footer
      </footer>
    </div>
  );
};

export default Layout;
