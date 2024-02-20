import { ReactElement } from 'react';
import styled from 'styled-components';

const FallbackWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin: 10px 0;
  font-size: 25px;
  color: red;
`;

function Fallback(): ReactElement {
  return (
    <FallbackWrapper>
      <StyledParagraph>Oops... Something went wrong.</StyledParagraph>
      <StyledParagraph>Try reloading the page.</StyledParagraph>
      <StyledParagraph>
        If the error happens again, please wait a few minutes and try again.
      </StyledParagraph>
    </FallbackWrapper>
  );
}

export default Fallback;
