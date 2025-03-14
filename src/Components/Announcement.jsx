import '../Styles/announcement.css';
function Announcement({ reset }){
    return(
        <div className="announcement">
            <div className="deets">
                {/* <img src="" alt="" /> */}
                <h2>Pika-Whoops!, You Lost</h2>
                <button onClick={reset}>Play Again</button>
            </div>
        </div>
    )
}

export default Announcement;