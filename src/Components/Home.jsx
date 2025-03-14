import '../Styles/home.css';

function Home({count, handleClick}){
    return (
      <div className={`welcome ${count === 0 ? "active" : "inactive"}`}>
        <p className="logo">ULTIMATE RECALL</p>
        <p className="sub">Memory Card Game</p>
        <button className="start" onClick={handleClick}>
          Start
        </button>
      </div>
    );
}

export default Home;