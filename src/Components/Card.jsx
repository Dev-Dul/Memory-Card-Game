import { useState, useEffect } from "react";
import '../Styles/card.css'

function Card({ check, handleClick, handleBoard, index, ind, resetChecker, handleScore, pokemon }){
    const [click, setClick] = useState(0);
    const [data, setData] = useState({img: null, name: null});
    const top = (ind === 2 || ind === 3) ? 220 : 0;
    const left = (ind === 1 || ind === 3) ? 180 : 0;

    async function fetchData(setData) {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            if(!response.ok) throw new Error(`error!, status: ${response.status}`);
            const data = await response.json();
            setData((prev) => ({
                ...prev,
                img: data.sprites.other["official-artwork"].front_default,
                name: data.name
            }));
        }catch(error){
            console.log(error);
        }
    }

    function clickHandler(){
        if(click > 0){
            handleBoard();
        }else{
            setClick(click + 1);
            handleScore();
        }
        handleClick();
    }


    useEffect(()=> {
        setClick(0);
    }, [resetChecker]);

    useEffect(() => {
        fetchData(setData);
    }, []);


    return (
        <div className={`card ${check ? "active" : "hidden"}`} onClick={clickHandler} style={{"--index": check ? ind : "unset", "--top": check ? `${top}px` : 0, "--left": `${left}px` }}>
            <img src={data.img} alt={data.name} className="img-card"/>
            <h2>{data.name}</h2>
        </div>
    )
}

export default Card;