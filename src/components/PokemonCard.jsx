
import './PokemonCard.css'

function PokemonCard({pokemon}){
    
   
       if (!pokemon.imgSrc) {
         return (
           <>
             
             <figure>
             <h2>???</h2>
             <figcaption>{pokemon.name}</figcaption>
             </figure>
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