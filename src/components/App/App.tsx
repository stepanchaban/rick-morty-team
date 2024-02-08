import { ReactElement } from 'react';
import CommonLayer from './CommonLayer';

import { Outlet } from 'react-router-dom';

export function App(): ReactElement {
  return (
    <div
      style={{
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CommonLayer>
        <Outlet />
      </CommonLayer>
    </div>
  );
}
