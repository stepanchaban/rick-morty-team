import { ReactElement } from 'react';
import HeartButton from './HeartButton';
import PurpleButtonLink from '@components/PurpleButton/PurpleButtonLink';
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

function Card(props: CardProps): ReactElement {
  return (
    <CardWrap>
      <ImageWrap>
        <img src={props.image} title="character" />
        <HeartButton {...props} />
      </ImageWrap>
      <CardTitle>{props.name}</CardTitle>
      <span>Species: {props.species}</span>
      <span>Gender: {props.gender}</span>
      <span>Status: {props.status}</span>
      <PurpleButtonLink path={props.path || ''} text={'More'} />
    </CardWrap>
  );
}

export default Card;
