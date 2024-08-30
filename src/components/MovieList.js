import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
    //console.log(movies);
    //console.log(movies[0].poster_path);
    return (
      <div className="px-6  text-white">
        <h1 className="py-4 text-3xl">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide bg-black">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    );
};
export default MovieList;