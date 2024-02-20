/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)<NavLinkProps>`
  width: ${props => props.width || '100%'};
  text-decoration: none;
`;

type NavLinkProps = {
  width?: string;
};
