import { ReactElement, useState } from "react";
import './heartButton.css';
import { ReactComponent as Heart } from '@sources/icons/favorite-heart-circle.svg';

function HeartButton(): ReactElement {
    const [isFavourite, setIsFavourite] = useState(false);

    function favouriteToggle(): void {
        setIsFavourite(!isFavourite);
    }

    return (
        <Heart className={isFavourite ? 'heart_favourite' : 'heart_not_favourite'} onClick={favouriteToggle}/>
    )
}

export default HeartButton;