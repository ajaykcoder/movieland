import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div>
            <div className="text-sm font-semibold text-white">{movie.Year}</div>
            <div>
                <img src={movie.Poster === `N/A` ? `/default.png` : movie.Poster} alt={movie.Title}/>
            </div>
            <div>
                <div className="text-base text-white">{movie.Title}</div>
            </div>
        </div>
    );
}
export default MovieCard;