import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const status = new URLSearchParams(location.search).get('status') ?? 'all';
    
  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      const currentStatus = new URLSearchParams(location.search).get('status');
      const url =
        currentStatus === 'all' || !currentStatus
          ? 'https://rickandmortyapi.com/api/character'
          : `https://rickandmortyapi.com/api/character?status=${currentStatus}`;
      
      const res = await fetch(url);
      const { results } = await res.json();

      setCharacters(results)
      setLoading(false);
    }
    fetchCharacters();
  }, [location.search]);
  
  console.log(characters)
  return (
    <>
      <h1>Rick and Morty: Characters</h1>
    {
      loading
        ? <img alt='loading spinner' src='/spinner.gif'/>
          : <>
            <div>
              <form>
              </form>  
            </div>
            {characters.map((character) => (
              <div key={character.id}>
              <h3>{character.name}</h3>
              <img src={character.image}/>
              <p>{character.status}</p>
              <p>{character.species}</p>
              </div>
            ))}
            </>
    }
    </>
  )
}
