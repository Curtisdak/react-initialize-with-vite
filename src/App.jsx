import PokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar'
import PropTypes from "prop-types"

import './App.css'
import React, { useState } from 'react'


function App() {

  const [pokemons, setPokemons] = useState([

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
    ]);

    const [theIndex, setIndex] = useState(0);

    const prevEl = () => {
      if(theIndex > 0){
        setIndex(theIndex - 1)
      }
    } ;

    const nextEl = () => {
      if(theIndex < pokemons.length-1){
        setIndex(theIndex + 1)
      }
    } ;   
  // const pokemon = { name:"mew"};
  return (
    <>
    <div className='PokemonCard-container'>
      <PokemonCard pokemon={pokemons[theIndex]}/>
    </div> 
    <Navbar prevEl={prevEl} nextEl={nextEl} />
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
