import { ReactElement } from 'react';
import Header from './Header/Header';

type Props = {
  children: ReactElement;
};

function CommonLayer({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default CommonLayer;
