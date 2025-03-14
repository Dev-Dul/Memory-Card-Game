import { useState } from "react";
import '../Styles/cardparent.css'
import Card from "./Card";
import { getIds, randomize } from "./Helpers";

function CardParent(props){
    const [indexes, setIndexes] = useState([0, 1, 2, 3]);
    const [cards, setCards] = useState(getIds());
    const [indexValue, setIndexValue] = useState([0, 1, 2, 3]);
    let current = 0;

    function handleClick(){
        setIndexes(randomize(indexes));
    }

    return (
      <div className={`card-parent ${props.count === 1 ? "active" : "inactive"}`}>
        <div className="header">
          <div>
            <h2 className="logo two">ULTIMATE RECALL</h2>
          </div>
          <p className="rule">
            Here's the deal: You earn a point for clicking the cards below,{" "}
            <br /> as long as you don't click on the same card twice.
          </p>
          <div className="score">
            <p>
              <span>Score:</span> <span></span>
            </p>
            <p>
              <span>Best Score:</span> <span></span>
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
            // if(current !== 0) current++;
            // if(current >= 4) current = 0;
            return <Card check={check} id={card.id} key={card.id} handleClick={handleClick} index={index} ind={ind} />
          })}
        </div>
      </div>
    );
}

export default CardParent;