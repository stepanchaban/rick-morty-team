import { ReactElement } from 'react';
import SearchPanel from '@components/Search/SearchPanel';
import CardList from '@components/CardList/CardList';
import styled from 'styled-components';

const MainContent = styled.main`
  background-color: #bbccfb;
  padding-bottom: 30px;
`;

function Main(): ReactElement {
  return (
    <MainContent>
      <SearchPanel />
      <CardList />
    </MainContent>
  );
}

export default Main;
