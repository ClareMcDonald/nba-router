import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


export default function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchCharacter() {
      setLoading(true);
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const newChar = await res.json();
      setCharacter(newChar);
      setLoading(false);
    }
    fetchCharacter();
  }, [])

  return (
    <>
      <h1>Character Details!</h1>
      <Link to='/'>Back to All Characters</Link>
      {loading
      ? <img alt='loading spinner' src='/spinner.gif'/>
      : <div>
          <h4>{character.name}</h4>
          <img alt='photo of character' src={character.image} />
          <p>{character.status}</p>
          <p>{character.species}</p>
        </div>
    }
    </>
  )
}
