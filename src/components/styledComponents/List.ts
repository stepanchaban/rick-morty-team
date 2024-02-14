/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Item = styled.li<ItemProps>`
  border-radius: ${props => props.border_radius};
  padding: 10px;
  &:hover {
    background-color: #adb0b3};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

type ItemProps = {
  border_radius: string;
};
