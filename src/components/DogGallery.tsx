import styled from "styled-components";
import {Dog} from "../interfaces/Dog.ts";


const AllDogsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
`;

const SingleDogDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 25%;
    padding: 10px;
    margin: 10px;
    background-color: rgb(138,153,168);
    text-align: center;
    border-radius: 10px;
`;

const DogImage = styled.img`
    width: 95%;
    max-width: 95%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    display: block;
    border-radius: 10px;
`;

const StyledH2 = styled.h2`
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    font-size: calc(0.2em + 2vw);
    color: rgb(239,235,231);
`;
const StyledP = styled.p`
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    font-size: calc(0.2em + 1vw);
    color: rgb(239,235,231);
`;

export default function DogGallery(props:{data:Dog[]}){
    return(
        <AllDogsDiv>
            {props.data.map((dog: Dog) => (
                <SingleDogDiv key = {dog.id}>
                    <StyledH2> {dog.breed.toUpperCase()}</StyledH2>
                    <DogImage src={dog.image} alt={`Image of ${dog.breed}`}/>
                    {dog.subbreed && <StyledP>Sub-breed: {dog.subbreed.toUpperCase()}</StyledP>}
                </SingleDogDiv>
            ))}
        </AllDogsDiv>
    );
}