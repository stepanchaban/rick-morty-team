import { ReactElement } from "react";
import HeartButton from "./HeartButton";
import styled from "styled-components";

const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    position: relative;
`
const ImageWrap = styled.div`
    position: relative;
`
const CardTitle = styled.span`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`
const CardButton = styled.button`
    width: 50%;
    background-color: #DA9BFA;
    border-radius: 10px;
    border: 2px solid #DA9BFA;
    padding: 10px 0;
    cursor: pointer;
    margin-top: 10px;
    font-size: 20px;
    transition: 0.3s;
    &:hover {
        background-color: transparent;
        border: 2px solid #DA9BFA;
    }
`
type Props = {
    src: string,
    name: string,
    species: string,
    gender: string,
    status: string,
}

function Card({src, name, species, gender, status}: Props): ReactElement {
    return (
        <CardWrap>
            <ImageWrap>
                <img src={src} title = 'character'/>
                <HeartButton/>
            </ImageWrap>
            <CardTitle>{name}</CardTitle>
            <span>Species: {species}</span>
            <span>Gender: {gender}</span>
            <span>Status: {status}</span>
            <CardButton>More</CardButton>
        </CardWrap>
    )
}

export default Card;