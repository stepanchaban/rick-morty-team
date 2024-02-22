import { ReactElement } from 'react';
import { findUserInfo } from '@utils/findUserInfo';
function History(): ReactElement {
  const userHistory = findUserInfo('history');
  console.log(userHistory);
  return <div>History</div>;
}

export default History;
