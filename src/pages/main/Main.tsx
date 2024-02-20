import { ReactElement } from 'react';
import SearchPanel from '@components/Search/SearchPanel';
import CardList from '@components/CardList/CardList';
import styled from 'styled-components';
import { MainBlock } from '@components/styledComponents/Main';
import { useTheme } from '@context/ThemeContext';
import { Theme } from '@projectTypes/index';

const MainContent = styled(MainBlock)<{ theme: Theme }>`
  padding-bottom: 30px;
  background-color: ${({ theme = 'light' }): string =>
    theme === 'light' ? '#bbccfb' : '#a5a5a569'};
`;

function Main(): ReactElement {
  const { theme } = useTheme();

  return (
    <MainContent direction={'column'} theme={theme}>
      <SearchPanel />
      <CardList />
    </MainContent>
  );
}

export default Main;
