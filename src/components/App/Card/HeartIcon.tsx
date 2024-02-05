import { ReactElement, useState } from "react";
import './heartIcon.css';
import { ReactComponent as Heart } from '../../../sources/icons/favorite-heart-circle.svg';

function HeartIcon(): ReactElement {
    const [isFavourite, setIsFavourite] = useState(false);

    function favouriteToggle(): void {
        setIsFavourite(!isFavourite);
    }

    return (
        <Heart className={isFavourite ? 'heart_favourite' : 'heart_not_favourite'} onClick={favouriteToggle}/>
    )
}

export default HeartIcon;