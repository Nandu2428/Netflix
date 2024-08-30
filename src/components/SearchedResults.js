import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SearchedResults = () => {
    const movies = useSelector(store => store.movies);
    if (!movies) return null;
    return (
      movies.searchedMovies && (
        <div className="bg-black h-80 bg-opacity-65 mt-5">
            <MovieList title={"Results"} movies={movies.searchedMovies} />
        </div>
      )
    );
};
export default SearchedResults;