import { ReactElement, useState } from 'react';
import { findUserInfo } from '@utils/findUserInfo';

function Favorites(): ReactElement {
  const userFavorites = findUserInfo('favorites');
  console.log(userFavorites);
  const [favorites, setFavorites] = useState(userFavorites);
  // setFavorites(userFavorites);

  return (
    <div>
      {/* {favorites.map((item, index) => {
        const path = `/characters/${item.id}`;
        return (
          <Fragment key={index}>
            <Card
              image={item.image}
              name={item.name}
              species={item.species}
              gender={item.gender}
              status={item.status}
              id={item.id}
              path={path}
            />
          </Fragment>
        );
      })} */}
    </div>
  );
}

export default Favorites;
