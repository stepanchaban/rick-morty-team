import { ReactElement } from 'react';
import SearchPanel from '@components/Search/SearchPanel';
import CardList from '@components/CardList/CardList';
import SortPanel from '@components/SortPanel/SortPanel';
import styled from 'styled-components';
import { Block } from '@components/styledComponents/Blocks';

const MainContent = styled(Block)`
  background-color: #bbccfb;
  padding-bottom: 30px;
`;

function Main(): ReactElement {
  return (
    <MainContent direction={'column'} as="main">
      <SearchPanel />
      <SortPanel />
      <CardList />
    </MainContent>
  );
}

export default Main;
