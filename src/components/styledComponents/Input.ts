/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Input = styled.input<InputProps>`
  width: ${props => props.width || '100%'};
  border-radius: 20px;
  border: 1px solid #838282;
  outline: none;
  font-size: 25px;
  padding: 10px;
  transition: 0.3s;
  &:focus {
    border: 1px solid #111111;
  }
`;

type InputProps = {
  width?: string;
};
