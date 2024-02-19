import CommonLayer from './CommonLayer';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './common/Fallback';
import { AppWrap } from '@components/styledComponents/App';

export const App: React.FC = () => {
  return (
    <AppWrap>
      <ErrorBoundary FallbackComponent={Fallback}>
        <CommonLayer>
          <Outlet />
        </CommonLayer>
      </ErrorBoundary>
    </AppWrap>
  );
};
