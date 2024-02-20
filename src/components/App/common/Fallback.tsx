import {
  FallbackWrapper,
  StyledParagraph,
} from '@components/styledComponents/Fallback';

const Fallback: React.FC = () => {
  return (
    <FallbackWrapper>
      <StyledParagraph>Oops... Something went wrong.</StyledParagraph>
      <StyledParagraph>Try reloading the page.</StyledParagraph>
      <StyledParagraph>
        If the error happens again, please wait a few minutes and try again.
      </StyledParagraph>
    </FallbackWrapper>
  );
};

export default Fallback;
