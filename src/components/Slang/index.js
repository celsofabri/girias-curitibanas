import React, { useState, useEffect } from 'react';
import { 
  StyledSlang, 
  StyledName, 
  StyledDescription, 
  StyledSubtitle,
  StyledExamples, 
  StyledExamplesList,
  StyledExamplesItem,
  StyledBottomBar,
  StyledButton
} from './styled';
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
        <StyledSubtitle>Descrição:</StyledSubtitle>
        <p>{slang?.description}</p>

        <StyledExamples>
          <StyledSubtitle>{slang?.examples.length > 1 ? 'Exemplos:' : 'Exemplo:'}</StyledSubtitle>
          <StyledExamplesList>
            {slang?.examples.map((example, index) => {
              return (
                <StyledExamplesItem key={index}>{example}</StyledExamplesItem>
              )
            })}
          </StyledExamplesList>
        </StyledExamples>
      </StyledDescription>
      <StyledBottomBar>
        <StyledButton onClick={() => getSlangRandom(SLANGS)} type="button">Atualizar</StyledButton>
      </StyledBottomBar>
      
    </StyledSlang>
  )
}

export default Slang;