// import React from "react";
import { useState } from "react"

function Navbar({eachBtn}){
    
    const [pokes, setPokes] = useState(eachBtn);
    const [index , setIndex] = useState(0);
    const [toggle, setToggle] = useState(true)

//  just to train by keeping the button "prev" and "next" I willcreate function !

    const prevEl = () => index > 0 && setIndex(index -1) ;
    const nextEl = () => index < pokes.length -1 ? setIndex(index + 1): setIndex(index * 0);
// I'am adding a delete button to each pokemon so can delee it if I want
    const deleteEl = (avatar) => {
        setPokes(pokes.filter((_, index) => index !== avatar))
    };

    return(
        <>
        <div className="super-container">
        <button onClick={prevEl}>Prev</button>
        <button onClick={nextEl}>Next</button>

        <div className="imgcontainer">
             <img src={pokes[index].imgSrc} alt="" />  
             {!pokes[index].imgSrc && <p>{pokes[index].name.toUpperCase()} no picture currently</p>} 
              
            <button key={index} onClick={() => deleteEl(index)}>delete</button>    
        </div>

        {/* the button to each pokemon  */}
        {pokes.map((poke, index)  => (<button className="poke-button" key={index} onClick={ () => {setIndex(index)}}>
          {poke.name}
        </button>)
        )}
        
        </div>
        

        </>

    )
}
export default Navbar