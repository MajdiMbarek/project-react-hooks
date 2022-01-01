import "./MovieCard.css";
import("https://fonts.google.com/share?selection.family=The%20Nautigal:wght@700");


export default function MovieCard({ ele }) {
    return (
        <div className="MovieCard">
            <div>
                <div>
                    <img className="img" width="300" alt="img" src={ele.img} />
                </div>
                <div >
                    <h2 className="title">{ele.title}</h2>
                    <p className="description">{ele.description}</p>
                    <h3 className="rate">Rate : {ele.rating}</h3>
                    <h4 className="poste">{ele.posterURL}</h4>
                </div>
            </div>
        </div>
    )
}