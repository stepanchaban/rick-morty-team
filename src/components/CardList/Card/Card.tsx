import { ReactElement } from 'react';
import HeartButton from './HeartButton';
import PurpleButton from '@components/PurpleButton/PurpleButton';
import styled from 'styled-components';
import { Card as CardType } from '@projectTypes/Card';

type CardProps = CardType & {
  path: string;
};

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;
const ImageWrap = styled.div`
  position: relative;
`;
const CardTitle = styled.span`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

function Card({
  image,
  name,
  species,
  gender,
  status,
  path,
}: CardProps): ReactElement {
  return (
    <CardWrap>
      <ImageWrap>
        <img src={image} title="character" />
        <HeartButton />
      </ImageWrap>
      <CardTitle>{name}</CardTitle>
      <span>Species: {species}</span>
      <span>Gender: {gender}</span>
      <span>Status: {status}</span>
      <PurpleButton path={path || ''} />
    </CardWrap>
  );
}

export default Card;
