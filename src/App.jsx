import PokemonCard from './components/PokemonCard'

import './App.css'
function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        
    },

    {
        name: "kirikou",
       
    },
  ]

  // const pokemon = { name:"mew"};
  return (
    <>
    <div className='PokemonCard-container'>
      <PokemonCard pokemon={pokemonList[1]}/>
      <PokemonCard pokemon={pokemonList[2]}/>
      <PokemonCard pokemon={pokemonList[0]}/>
    </div> 
    </>
  )
}

export default App
