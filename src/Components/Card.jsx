import { useState, useEffect } from "react";
import '../Styles/card.css'

function Card({ check, handleClick, handleBoard, index, ind, resetChecker }){
    const [click, setClick] = useState(0);
    console.log(click);
    console.log(ind);

    function clickHandler(){
        if(click > 0){
            handleBoard();
        }else{
            setClick(click + 1);
        }
        handleClick();
    }


    useEffect(()=> {
        setClick(0);
    }, [resetChecker]);


    return (
        <div className={`card ${check ? "active" : "hidden"}`} onClick={clickHandler} style={{"--index": check ? ind : "unset"}}>
            <h2>{index}</h2>
            {/* <img src="" alt="" className="img-card"/> */}
        </div>
    )
}

export default Card;