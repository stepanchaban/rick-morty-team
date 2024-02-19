import { ReactElement, Fragment } from 'react';
import Card from '@components/CardList/Card/Card';
import styled from 'styled-components';
import { LoadingSpinner } from '@components/Loader/LoadingSpinner';
import { useGetCharactersQuery } from '@services/rickMorthyApi';
import SortPanel from '../SortPanel/SortPanel';

const CardListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

function CardList(): ReactElement {
  const { data, error, isLoading } = useGetCharactersQuery();

  const content = isLoading ? (
    <LoadingSpinner />
  ) : (
    data?.map((item, index) => {
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
    })
  );

  return (
    <>
      <SortPanel />
      <CardListContent>{content}</CardListContent>
    </>
  );
}

export default CardList;
