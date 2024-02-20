import { ReactElement, useState } from 'react';
import { ReactComponent as Heart } from '@sources/icons/favorite-heart-circle.svg';
import styled from 'styled-components';

interface IButtonProps {
  $isFavourite: boolean;
}

const Button = styled(Heart)<IButtonProps>`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  :last-child {
    fill: ${(props): string => (props.$isFavourite ? '#D26E6E' : '#adb0b3')};
    transition: 0.2s;
  }
`;

function HeartButton(): ReactElement {
  const [isFavourite, setIsFavourite] = useState(false);

  function favouriteToggle(): void {
    setIsFavourite(!isFavourite);
  }

  return <Button $isFavourite={isFavourite} onClick={favouriteToggle} />;
}

export default HeartButton;
