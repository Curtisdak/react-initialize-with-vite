
import './PokemonCard.css'

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
  ];

function PokemonCard(){
    const pokemon =pokemonList[1]
       if (!pokemon.imgSrc) {
         return (
           <>
             <p>???</p>
             <figcaption>{pokemon.name}</figcaption>
           </>
         );
       } else {
         return (
           <figure>
             <img src={pokemon.imgSrc} />
             <figcaption>{pokemon.name}</figcaption>
           </figure>
         );
       }

}

export default PokemonCard