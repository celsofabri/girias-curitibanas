import React, { useState, useEffect } from 'react';
import { StyledSlang } from './styled';
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
      <h2>{slang?.name}</h2>
      <p>{slang?.description}</p>
      <ul>
        {slang?.examples.map((example, index) => {
          return (
            <li key={index}>{example}</li>
          )
        })}
      </ul>
      <button onClick={() => getSlangRandom(SLANGS)} type="button">Update</button>
    </StyledSlang>
  )
}

export default Slang;