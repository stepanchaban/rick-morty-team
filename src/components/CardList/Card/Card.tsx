import { ReactElement } from "react";
import HeartButton from "./HeartButton";

type Props = {
    src: string,
    name: string,
    species: string,
    gender: string,
    status: string,
}

function Card({src, name, species, gender, status}: Props): ReactElement {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', backgroundColor: 'white', padding: '20px', borderRadius:'10px', position: 'relative'}}>
            <div style={{position: 'relative'}}>
                <img src={src} title = 'character'/>
                <HeartButton/>
            </div>
            <span style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px'}}>{name}</span>
            <span>Species: {species}</span>
            <span>Gender: {gender}</span>
            <span>Status: {status}</span>
            <button style={{width: '50%', backgroundColor: 'lightgreen', borderRadius: '5px', border: '0px', padding: '5px', cursor: 'pointer', marginTop: '10px', fontSize: '20px'}}>More</button>
        </div>
    )
}

export default Card;