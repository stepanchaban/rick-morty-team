/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ReactElement } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  styles?: ButtonProps;
  onClickHandler?: () => void;
};

function PurpleButton({ text, styles, onClickHandler }: Props): ReactElement {
  return (
    <Button onClick={onClickHandler} width={styles?.width}>
      {text}
    </Button>
  );
}

export default PurpleButton;

const Button = styled.button<ButtonProps>`
  width: ${props => props.width || '100%'};
  background-color: #da9bfa;
  border-radius: 10px;
  border: 2px solid #da9bfa;
  padding: 10px 0;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s;
  &:hover {
    background-color: transparent;
    border: 2px solid #da9bfa;
  }
`;

type ButtonProps = {
  width?: string;
};
