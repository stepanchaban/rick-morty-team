import { ReactElement, Fragment } from 'react';
import Card from '@components/CardList/Card/Card';
import styled from 'styled-components';
import { LoadingSpinner } from '@components/Loader/LoadingSpinner';
import { useGetCharactersQuery } from '@services/rickMorthyApi';
import Error from '@components/Error/Error';
import { useAppSelector } from '@hooks/reduxHooks';
import { helperSort } from '@utils/sorting';

const CardListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

function CardList(): ReactElement {
  const searchValue = useAppSelector(state => state.searchValue.searchValue);
  const { isError, isLoading } = useGetCharactersQuery(searchValue);
  const firstGroup = useAppSelector(state => state.sort.firstGroup);
  const storageData = useAppSelector(state => state.storageData.data);

  let content;

  if (storageData) {
    const sortedData = helperSort(firstGroup, storageData);
    content = sortedData.map((item, index) => {
      const path = `/characters/${item.id}`;
      return (
        <Fragment key={index}>
          <Card
            image={item.image}
            name={item.name}
            species={item.species}
            gender={item.gender}
            status={item.status}
            id={item.id}
            path={path}
          />
        </Fragment>
      );
    });
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (isError) {
    content = <Error />;
  }

  return (
    <>
      <CardListContent>{content}</CardListContent>
    </>
  );
}

export default CardList;
