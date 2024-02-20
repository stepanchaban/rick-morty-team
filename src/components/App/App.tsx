import { ReactElement } from 'react';
import CommonLayer from './CommonLayer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './common/Fallback';

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  min-width: 375px;
`;

export function App(): ReactElement {
  return (
    <AppWrap>
      <ErrorBoundary FallbackComponent={Fallback}>
        <CommonLayer>
          <Outlet />
        </CommonLayer>
      </ErrorBoundary>
    </AppWrap>
  );
}
