import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  path: string;
  text: string;
};

const CardButton = styled.button`
  width: 50%;
  background-color: #da9bfa;
  border-radius: 10px;
  border: 2px solid #da9bfa;
  padding: 10px 0;
  cursor: pointer;
  margin-top: 10px;
  font-size: 20px;
  transition: 0.3s;
  &:hover {
    background-color: transparent;
    border: 2px solid #da9bfa;
  }
`;

function PurpleButton({ path, text }: Props): ReactElement {
  return (
    <CardButton>
      <Link to={path}>{text}</Link>
    </CardButton>
  );
}

export default PurpleButton;
