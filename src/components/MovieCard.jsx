import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div>
            <div>{movie.Year}</div>
            <div>
                <img src={movie.Poster === `N/A` ? `https://regiustechnologies.com/_next/image?url=https%3A%2F%2Fwww.regiustechnologies.com%2Fassets%2Fimages%2Fdefault.png&w=3840&q=75` : movie.Poster} alt={movie.Title}/>
            </div>
            <div>{movie.Title}</div>
        </div>
    );
}
export default MovieCard;