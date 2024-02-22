import { ReactElement } from 'react';
import { findUserInfo } from '@utils/findUserInfo';
import { Block } from '@components/styledComponents/Blocks';
import { BoldText } from '@components/styledComponents/Text';
import { VerticalSeparator } from '@components/styledComponents/Separators';
import { TableEl, TD } from '@components/styledComponents/Table';
import deleteIcon from '@sources/icons/delete.png';

function History(): ReactElement {
  const userHistory = findUserInfo('history');

  return (
    <Block direction={'column'}>
      <VerticalSeparator height={'50px'} />
      <BoldText font_size={'24px'}>Search history</BoldText>
      <VerticalSeparator height={'50px'} />
      <Table data={tableData} />
    </Block>
  );
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
        <TD scope="row">{index + 1}</TD>
        <TD>{item.searchQuery}</TD>
        <TD>{item.date}</TD>
        <TD>
          <Block width={'100%'}>
            <img width={'10%'} src={deleteIcon} alt="delete icon" />
          </Block>
        </TD>
      </tr>
    );
  });

  return (
    <TableEl>
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Search query</th>
          <th scope="col">Date</th>
          <th scope="col">Delete item</th>
        </tr>
      </thead>
      <tbody>{columns}</tbody>
    </TableEl>
  );
}

export default History;
