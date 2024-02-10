import { ReactElement } from 'react';
// import Card from "@components/CardList/Card/Card";
import styled from 'styled-components';

const CardListWrap = styled.div`
  padding: 0 50px;
`;
const CardListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

function CardList(): ReactElement {
  return (
    <CardListWrap>
      <CardListContent>
        {/* {mockData.results.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card
                                src = {item.image}
                                name = {item.name}
                                species = {item.species}
                                gender = {item.gender}
                                status = {item.status}
                            />
                        </div>
                    )
                })} */}
      </CardListContent>
    </CardListWrap>
  );
}

export default CardList;
