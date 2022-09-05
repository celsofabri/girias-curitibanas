import React, { useState, useEffect } from 'react';
import { StyledSlang, StyledName, StyledDescription, StyledExamples } from './styled';
import { SLANGS } from './constants';

const Slang = () => {

  const [slang, setSlang] = useState({
    name: '', 
    description: '', 
    examples: []
  })

  const getSlangRandom = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
  
    setSlang(item);
  }

  useEffect(() => {
    getSlangRandom(SLANGS)
  }, [])

  return (
    <StyledSlang>
      <StyledName>{slang?.name}</StyledName>
      <StyledDescription>
        <p>{slang?.description}</p>

        <StyledExamples>
          <ul>
            {slang?.examples.map((example, index) => {
              return (
                <li key={index}>{example}</li>
              )
            })}
          </ul>
        </StyledExamples>
      </StyledDescription>
      <button onClick={() => getSlangRandom(SLANGS)} type="button">Atualizar</button>
    </StyledSlang>
  )
}

export default Slang;