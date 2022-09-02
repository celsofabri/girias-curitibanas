import React, { useEffect, useState } from 'react';
import { GIRIAS } from './constants';

const App = () => {
  const [giria, setGiria] = useState({
    name: '', 
    description: '', 
    examples: []
  })

  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
  
    setGiria(item);
  }

  useEffect(() => {
    getRandomItem(GIRIAS)
  }, [])

  return (
    <div>

      <h2>{giria?.name}</h2>
      <p>{giria?.description}</p>
      <ul>
        {giria?.examples.map((example) => {

          return (
            <li>{example}</li>
          )
        })}
      </ul>

      <button onClick={() => getRandomItem(GIRIAS)} type="button">Update</button>
    </div>
  );
}

export default App;
