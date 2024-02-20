import CommonLayer from './CommonLayer';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './common/Fallback';
import { AppWrap } from '@components/styledComponents/App';
import { ThemeProvider } from '@context/ThemeContext';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppWrap>
        <ErrorBoundary FallbackComponent={Fallback}>
          <CommonLayer>
            <Outlet />
          </CommonLayer>
        </ErrorBoundary>
      </AppWrap>
    </ThemeProvider>
  );
};
