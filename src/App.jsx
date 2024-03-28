import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"

import './App.css'
import { useState } from 'react'


function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  const [index, setIndex] = useState(0);

  // const pokemon = { name:"mew"};
  return (
    <>
    <div className='PokemonCard-container'>
      <PokemonCard pokemon={pokemonList[index]}/>
    </div> 

    {index > 0 && <button onClick={() => setIndex(index - 1)}>Prev</button> }
    {index < pokemonList.length - 1 ? <button onClick={() => setIndex(index + 1)}> more </button> : <button className='disabled'> more</button>}
    </>
  )
  
}

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default App
