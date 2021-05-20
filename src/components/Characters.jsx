import {useEffect, useState} from 'react';
import CharacterCard from './CharacterCard';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []);

  return (
    <div className='flex-column'>
      <div>
        <h3>characters</h3>
      </div>
      <div className='flex cards-container'>
          {characters.map(character => (
            <CharacterCard data={character} ></CharacterCard>
          ))}
      </div>
    </div>
  )
}

export default Characters;