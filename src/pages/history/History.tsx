import { ReactElement, useState } from 'react';
import { findUserInfo } from '@utils/findUserInfo';
import { Block } from '@components/styledComponents/Blocks';
import { BoldText, Text } from '@components/styledComponents/Text';
import { VerticalSeparator } from '@components/styledComponents/Separators';
import { TableEl, TD } from '@components/styledComponents/Table';
import deleteIcon from '@sources/icons/delete.png';
import { useNavigate } from 'react-router-dom';
import { HistoryInfo } from '@projectTypes/HistoryInfo';
import { deleteItemFronUserHistory } from '@components/Search/addURLToUserHistory';

function History(): ReactElement {
  const userHistory: HistoryInfo[] = findUserInfo('history');
  const [tableContent, setTableContent] = useState(userHistory);

  function updateTableContent(): void {
    const userHistory: HistoryInfo[] = findUserInfo('history');
    setTableContent(userHistory);
  }

  const content =
    tableContent.length > 0 ? (
      <Table updateTableContent={updateTableContent} data={tableContent} />
    ) : (
      <Text font_size={'18px'}>Nothing to show</Text>
    );

  return (
    <Block direction={'column'}>
      <VerticalSeparator height={'50px'} />
      <BoldText font_size={'24px'}>Search history</BoldText>
      <VerticalSeparator height={'50px'} />
      {content}
    </Block>
  );
}

export default History;

type TableProps = {
  data: HistoryInfo[];
  updateTableContent: () => void;
};

function Table({ data, updateTableContent }: TableProps): ReactElement {
  const navigate = useNavigate();

  const columns = data.map((item, index) => {
    function deleteHandler(): void {
      deleteItemFronUserHistory(item.id);
      updateTableContent();
    }

    function onClickHandler(): void {
      navigate(`/${item.url}`);
    }
    return (
      <tr key={item.id}>
        <TD scope="row">{index + 1}</TD>
        <TD onClick={onClickHandler}>{item.search}</TD>
        <TD>{item.sortType || 'No sorting'}</TD>
        <TD>{item.date}</TD>
        <TD onClick={deleteHandler}>
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
