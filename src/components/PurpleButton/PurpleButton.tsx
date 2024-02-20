import { ReactElement } from 'react';
import styled from 'styled-components';
import { NavLink } from '@components/styledComponents/Link';

type Props = {
  path: string;
  text: string;
};

const CardButton = styled.button`
  width: 100%;
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

function PurpleButton({ path, text }: Props): ReactElement {
  return (
    <NavLink width={'50%'} to={path}>
      <CardButton>{text}</CardButton>
    </NavLink>
  );
}

export default PurpleButton;
