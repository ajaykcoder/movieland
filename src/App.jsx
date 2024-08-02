import React,{useState,useEffect} from "react";
import MovieCard from "./components/MovieCard";

const App = () => {
    const API_KEY = "3b39983f";
    const API_URL = `https://omdbapi.com?apikey=${API_KEY}`;


    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL}&s=${title}`);
        const data = await responce.json();
        setMovies(data.Search);
        console.log(movies)
    }
    useEffect(() => {
        searchMovies("Spiderman");
    }, []);
    return (
        <div>
            <h1>MovieLand</h1>
            <div>
                <div>
                    <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    {/* svg */}
                    <button onClick={() => searchMovies(searchTerm)}>Search</button>
                </div>
                {movies && movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID}/>
                    ))
                ) : (
                    <div>No movie found ):</div>
                )}
            </div>
        </div>
    );
}
export default App;