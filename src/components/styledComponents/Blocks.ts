/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Block = styled.div<BlockProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify_content || 'center'};
  align-items: ${props => props.align_items || 'center'};
  gap: ${props => props.gap};
  border-radius: ${props => props.border_radius};
  padding: ${props => props.padding || '10px'};
  position: ${props => props.position || 'static'};
`;

export const AbsoluteBlock = styled(Block)<AbsoluteBlock>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  z-index: ${props => props.z_index};
`;

export const ColoredBlock = styled(Block)<ColoredBlock>`
  background-color: ${props => props.background_color};
  box-shadow: ${props => props.box_shadow};
`;

export const ColoredAbsoluteBlock = styled(AbsoluteBlock)<ColoredBlock>`
  background-color: ${props => props.background_color};
  box-shadow: ${props => props.box_shadow};
`;

export const ScrollBlock = styled(Block)<ScrollBlock>`
  overflow: ${props => props.overflow || 'auto'};
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #da9bfa;
    border-radius: 5px;
  }
`;

type BlockProps = {
  width?: string;
  height?: string;
  direction?: string;
  justify_content?: string;
  align_items?: string;
  gap?: string;
  padding?: string;
  background_hover?: string;
  border_radius?: string;
  position?: string;
};

type AbsoluteBlock = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  z_index?: string;
};

type ColoredBlock = {
  background_color?: string;
  box_shadow?: string;
};

type ScrollBlock = {
  overflow?: string;
};
