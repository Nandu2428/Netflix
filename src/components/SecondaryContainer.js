import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    if (movies === null) return;
    return (
      movies.nowPlayingMovies && movies.nowPlayingTeaser && (
        <div className="bg-black">
          <div className="mt-0 pl-2 md:-mt-52 pl-12 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
            
          </div>
        </div>
      )
    );
};
export default SecondaryContainer;