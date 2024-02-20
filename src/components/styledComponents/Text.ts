/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Text = styled.span<TextProp>`
  font-size: ${props => props.font_size || '12px'};
  text-align: center;
  color: ${props => props.color};
`;

export const BoldText = styled(Text)`
  font-weight: 700;
`;

type TextProp = {
  font_size?: string;
  color?: string;
};
