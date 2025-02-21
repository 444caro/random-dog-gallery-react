import DogGallery from "./components/DogGallery.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Dog} from "./interfaces/Dog.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 10px rgb(168,153,138) solid;
    background-color: rgb(214,205,197);
    border-radius: 10px;
`;
const StyledH1 = styled.h1`
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    font-size: calc(2em + 4vw);
    letter-spacing: 0.1em;
    text-align: center;
    color: rgb(239,235,231);
    background-color: rgb(138,153,168);
    margin: 2vw;
    padding: 2vw;
    border: 5px rgb(168,153,138) solid;
    border-radius: 10px;
`;

export default function App() {
  const [data, setData] = useState<Dog[]>([]);

  // Fetch 5 random dog images 
  useEffect(() => {
    async function fetchRandomDogs(){
      const rawData = await fetch("https://dog.ceo/api/breeds/image/random/20");
      const results = await rawData.json();
      const formattedDogs: Dog[] = results.message.map((dog: string, index: number) => {
        const parts = dog.split("/");
        const breedParts = parts[4].split("-");
        const breed = breedParts[0];
        const subbreed = breedParts.length > 1 ? breedParts[1] : "";   //get subbreed if it exists
        return {
          id: index,
          image: dog,
          breed: breed,
          subbreed: subbreed
        }
      });
      setData(formattedDogs);
    }
    fetchRandomDogs().then(()=>console.log("dogs sucessfully fetched"))
    .catch((e)=>console.log("this happened",e));
  }, []);

  return (
    <ParentDiv>
      <StyledH1>Random Dogs</StyledH1>
      <DogGallery data = {data} />
    </ParentDiv>
  )
}

