import { useState, useEffect } from "react";
import '../Styles/card.css'

function Card({ check, handleClick, index, ind }){
    const [click, setClick] = useState(0);
    const group = Math.floor(index / 4);
    console.log(ind);

    function clickHandler(){
        setClick(click + 1);
        handleClick();
    }

    return (
        <div className={`card ${check ? "active" : "hidden"}`} onClick={clickHandler} style={{"--index": check ? ind : "unset"}}>
            <h2>{index}</h2>
            {/* <img src="" alt="" className="img-card"/> */}
        </div>
    )
}

export default Card;