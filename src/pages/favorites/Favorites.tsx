import { ReactElement, useState, useEffect, Fragment } from 'react';
import { findUserInfo } from '@utils/findUserInfo';
import { Character } from '@projectTypes/Character';
import Card from '@components/CardList/Card/Card';

const baseURL = 'https://rickandmortyapi.com/api';

function Favorites(): ReactElement {
  // const userFavorites: Character[] = findUserInfo('favorites');
  // const [favorites, setFavorites] = useState<Character[]>([]);
  // useEffect(() => {
  //   const favsChars: Character[] = [];
  //   userFavorites.map(async id => {
  //     const response = await fetch(`${baseURL}/character/${id}`);
  //     if (response.ok) {
  //       const characterData = await response.json();
  //       favsChars.push(characterData);
  //     } else {
  //       console.log('error');
  //     }
  //   });
  // }, []);
  // return (
  //   <div>
  //     {favorites.map((item, index) => {
  //       const path = `/characters/${item.id}`;
  //       console.log(item);
  //       return (
  //         <Fragment key={index}>
  //           <Card
  //             image={item.image}
  //             name={item.name}
  //             species={item.species}
  //             gender={item.gender}
  //             status={item.status}
  //             id={item.id}
  //             path={path}
  //           />
  //         </Fragment>
  //       );
  //     })}
  //   </div>
  // );
  return <div>Favorites</div>;
}

export default Favorites;
