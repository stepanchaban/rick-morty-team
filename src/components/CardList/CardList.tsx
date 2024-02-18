import { ReactElement, Fragment } from 'react';
import Card from '@components/CardList/Card/Card';
import styled from 'styled-components';
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
    <div>Loading...</div>
  ) : (
    data?.map((item, index) => {
      return (
        <Fragment key={index}>
          <Card
            image={item.image}
            name={item.name}
            species={item.species}
            gender={item.gender}
            status={item.status}
            id={item.id}
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
