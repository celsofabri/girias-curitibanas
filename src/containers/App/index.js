import React from 'react';
import Sidebar from 'components/Sidebar';
import Slang from 'components/Slang';
import { StyledApp } from './styled';

const App = () => {

  return (
    <StyledApp>
      <Sidebar/>
      <Slang/>
    </StyledApp>
  );
}

export default App;
