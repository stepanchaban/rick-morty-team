import { ReactElement } from 'react';
import { findUserInfo } from '@utils/findUserInfo';
import { Block } from '@components/styledComponents/Blocks';
import { BoldText } from '@components/styledComponents/Text';
import { VerticalSeparator } from '@components/styledComponents/Separators';
import { TableEl, TD } from '@components/styledComponents/Table';
import deleteIcon from '@sources/icons/delete.png';
import { useNavigate } from 'react-router-dom';

function History(): ReactElement {
  const userHistory: TableData[] = findUserInfo('history');

  return (
    <Block direction={'column'}>
      <VerticalSeparator height={'50px'} />
      <BoldText font_size={'24px'}>Search history</BoldText>
      <VerticalSeparator height={'50px'} />
      <Table data={userHistory} />
    </Block>
  );
}

type TableData = {
  search: string;
  date: string;
  url: string;
  id: string;
  sortType: string;
};

type TableProps = {
  data: TableData[];
};

function Table({ data }: TableProps): ReactElement {
  const navigate = useNavigate();

  const columns = data.map((item, index) => {
    function onClickHandler(): void {
      navigate(`/${item.url}`);
    }
    return (
      <tr key={item.id}>
        <TD scope="row">{index + 1}</TD>
        <TD onClick={onClickHandler}>{item.search}</TD>
        <TD>{item.sortType || 'No sorting'}</TD>
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
          <th scope="col">Sort type</th>
          <th scope="col">Date</th>
          <th scope="col">Delete item</th>
        </tr>
      </thead>
      <tbody>{columns}</tbody>
    </TableEl>
  );
}

export default History;
