import React from "react";

function Navbar({prevEl, nextEl}){
    
    return(
        <>
        <button onClick={prevEl}>Prev</button>
        <button onClick={nextEl}>Next</button>
        </>

    )
}
export default Navbar