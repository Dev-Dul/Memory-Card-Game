import { useState } from "react";
import '../Styles/cardparent.css'
import Card from "./Card";
import Announcement from "./Announcement";
import { getIds, randomize } from "./Helpers";

function CardParent(props){
    const [indexes, setIndexes] = useState([0, 1, 2, 3]);
    const [cards, setCards] = useState(getIds());
    const [board, setBoard] = useState(false);
    const [isReset, setIsReset] = useState(false);
    const [score, setScore] = useState(0);
    const [bestscore, setBestScore] = useState(0);
    const pokemons =['pikachu', 'eevee', 'jigglypuff', 'cubchoo', 'emolga', 'stufful', 'wooper', 'chikorita', 'fidough', 'mareep', 'piplup', 'chikorita'];
    const indexValue = [0, 1, 2, 3];
    let current = 0;

    function handleClick(){
        setIndexes(randomize(indexes));
    }

    function handleBoard(){
      setBoard(true);
    }

    function handleScore(){
      setScore(score + 1);
    }

    function reset(){
      setIndexes([0, 1, 2, 3]);
      setBoard(false);
      setIsReset((prev) => !prev);
      setScore(0);
      if(score > bestscore){
        setBestScore(score);
      }
    }

    return (
      <div className={`card-parent ${props.count === 1 ? "active" : "inactive"}`}>
        {board && <Announcement reset={reset} />}
        <div className="header">
          <div>
            <h2 className="logo two">PokePsygon</h2>
          </div>
          <p className="rule">
            Here's the deal: You earn a point for clicking the cards below,{" "}
            <br /> as long as you don't click on the same card twice.
          </p>
          <div className="score">
            <p>
              <span>Score:</span> {score} <span></span>
            </p>
            <p>
              <span>Best Score:</span> {bestscore} <span></span>
            </p>
          </div>
        </div>
        <div className="cards">
          {cards.map((card, index) => {
            const check = indexes.includes(index);
            let ind = indexValue[current % indexValue.length];
            if(check){
              current++;
            }
            return <Card check={check} id={card.id} key={card.id} handleClick={handleClick} handleBoard={handleBoard} index={index} pokemon={pokemons[index]} ind={ind} resetChecker={isReset} handleScore={handleScore} />
          })}
        </div>
      </div>
    );
}

export default CardParent;