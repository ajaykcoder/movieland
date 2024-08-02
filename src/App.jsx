import React,{useState,useEffect} from "react";
import {API_KEY, API_URL} from "./Constant";
import MovieCard from "./components/MovieCard";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = async (title) => {
        const responce = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
        const data = await responce.json();
        setMovies(data.Search);
        console.log(movies)
    }
    useEffect(() => {
        searchMovies("avengers"); // pass 1st time static value
    }, []);
    return (
        <div className="w-full py-10 px-5 absolute">
            <div className="w-[1440px] max-w-full mx-auto">
                <h1 className="text-3xl font-semibold text-white text-center">MovieLand</h1>
                {movies && (
                    <div className="mt-24">
                        <div className="mb-10 w-full flex justify-center">
                            <div className="relative">
                                <input type="text" className="border border-blue bg-transparent h-11 w-[500px] focus:outline-none outline-green pl-6 pr-[64px] text-text text-sm rounded-full" placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                                <button onClick={() => searchMovies(searchTerm)} className="text-base h-11 w-[70px] text-white bg-darkBlu px-6 absolute right-0 top-0 rounded-r-full">
                                    <svg className="fill-blue" width="20" height="20" viewBox="0 0 24 24"><g><path d="m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"></path></g></svg>
                                </button>
                            </div>
                        </div>
                        {movies && movies.length > 0 ? (
                            movies.map((movie) => (
                                <MovieCard movie={movie} key={movie.imdbID}/>
                            ))
                        ) : (
                            <div>No movie found ):</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
export default App;