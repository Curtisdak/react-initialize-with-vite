
import './PokemonCard.css'

function PokemonCard({pokemon}){
    
   
       if (!pokemon.imgSrc) {
         return (
           <>
             
             <figure>
             <p>???</p>
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