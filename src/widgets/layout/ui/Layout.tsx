import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import style from './Layout.module.scss';

import Text from '@/shared/ui/text/ui/Text';

const Layout: FC = () => {
  return (
    <div className={style.wrapper}>
      <header
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '1rem 2rem',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Text variant="18">
          <Link to="/ui">UI</Link>
        </Text>
        <Text variant="18">
          <Link to="/products">Products</Link>
        </Text>
        <Text variant="18">
          <Link to="/todos">Todos</Link>
        </Text>
        <Text variant="18">
          <Link to="/todos-connect">Todos connect</Link>
        </Text>
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
