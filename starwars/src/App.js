import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`;
const Characters = styled.div`
  background-color: rgba(211,211,211,0.8);
  width: 45%;
  padding: 2%;
  margin: 0.5%;
`;
const CharacterNames= styled.h3`
  background-color: rgba(128,128,128,0.8);
  padding: 1%;
  font-size: 50px;
`;
const CharacterAttr= styled.p`
  font-size: 35px;
`;
const Title = styled.h1`
  font-size: 80px;
  padding: 4%;
`;
const SubTitle = styled.h2`
  font-size: 60px;
`;

const App = () => {
  const [starChars, setStarChars] = useState([])

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
    .then(response => {
      console.log(response.data.results)
      setStarChars(response.data.results)
    }).catch(error => {
      console.log('The force is not with you', error)
    })
  }, [])

  return (
    <div className="App">
      <Title className="Header">React Wars</Title>
      <hr></hr>
      <SubTitle>Character List</SubTitle>
        <CharacterContainer>
          {starChars.map((info, index) => {
            return(
              <Characters>
              <CharacterNames className='name' key={index}>{info.name}</CharacterNames>
              <CharacterAttr key={index}>Gender: {info.gender}<br/>Height: {info.height}<br/>Weight: {info.mass}<br/>Hair Color: {info.hair_color}<br/>Eye Color: {info.eye_color}</CharacterAttr>
              </Characters>
            )
          })}
        </CharacterContainer>
    </div>
  );
}

export default App;
