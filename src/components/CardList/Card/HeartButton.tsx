import { ReactElement, useState } from 'react';
import { ReactComponent as Heart } from '@sources/icons/favorite-heart-circle.svg';
import styled from 'styled-components';
import { Card as CardType } from '@projectTypes/Card';
import { useAppSelector } from '@hooks/reduxHooks';
import { RootState } from '@store/store';

interface IButtonProps {
  $isFavourite: boolean;
}

type CardProps = CardType & {
  path: string;
  favorites?: CardType[];
  // isFavourite: boolean;
  handleClick?: (newFavorite: CardType) => void;
};

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

function HeartButton(props: CardProps): ReactElement | null {
  const isAuth = useAppSelector((state: RootState) => state.auth.auth);
  // const isInFavorite = favorites.find(item => {
  //   return item.id === props.id;
  // });
  // console.log(favorites);
  const [isFavourite, setIsFavourite] = useState(false);

  // function handleClick(): void {
  //   togglerFavorites(props);
  // }

  // useEffect(() => {
  //   const isInFavoriteUpdated = favorites.find(item => item.id === props.id);
  //   setIsFavourite(isInFavoriteUpdated ? true : false);
  // }, [favorites, props.id]);

  return isAuth ? <Button $isFavourite={isFavourite} /> : null;
}

export default HeartButton;
