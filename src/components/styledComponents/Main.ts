/* eslint-disable @typescript-eslint/explicit-function-return-type */

import styled from 'styled-components';

export const MainBlock = styled.main<MainProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify_content || 'center'};
  align-items: ${props => props.align_items || 'center'};
  gap: ${props => props.gap};
  border-radius: ${props => props.border_radius};
  padding: ${props => props.padding || '10px'};
`;

type MainProps = {
  width?: string;
  height?: string;
  direction?: string;
  justify_content?: string;
  align_items?: string;
  gap?: string;
  padding?: string;
  background_hover?: string;
  border_radius?: string;
};
