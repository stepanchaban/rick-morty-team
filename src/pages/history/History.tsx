import { ReactElement } from 'react';
import { findUserInfo } from '@utils/findUserInfo';
import { Block } from '@components/styledComponents/Blocks';
import { Text, BoldText } from '@components/styledComponents/Text';

function History(): ReactElement {
  const userHistory = findUserInfo('history');
  console.log(userHistory);
  return <div>History</div>;
}

type TableData = {
  searchQuery: string;
  date: string;
};

const tableData = [
  {
    searchQuery: 'gdgsdhgfgh',
    date: '12-12-2023',
  },
  {
    searchQuery: 'gdgsdhgfgh',
    date: '12-12-2023',
  },
  {
    searchQuery: 'gdgsdhgfgh',
    date: '12-12-2023',
  },
];

type TableProps = {
  data: TableData[];
};

function Table({ data }: TableProps): ReactElement {
  const columns = data.map((item, index) => {
    return (
      <tr key={`${item.date}${item.searchQuery}`}>
        <th scope="row">Buzzcocks</th>
        <td>1976</td>
        <td>9</td>
        <td>Ever fallen in love (with someone you ve)</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Search query</th>
          <th scope="col">Date</th>
          <th scope="col">Delete item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Buzzcocks</th>
          <td>1976</td>
          <td>9</td>
          <td>Ever fallen in love (with someone you ve)</td>
        </tr>
        <tr>
          <th scope="row">The Clash</th>
          <td>1976</td>
          <td>6</td>
          <td>London Calling</td>
        </tr>

        <tr>
          <th scope="row">The Stranglers</th>
          <td>1974</td>
          <td>17</td>
          <td>No More Heroes</td>
        </tr>
      </tbody>
    </table>
  );
}

export default History;
