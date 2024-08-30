import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/langConfig";
import { useRef} from "react";
import { addSearchedMovies } from "../utils/moviesSlice";

const SearchBar = () => {
   
    const dispatch = useDispatch();
    const searchText = useRef(null);

    const searchMovies = async (movie) => {
        const response = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await response.json();
        dispatch(addSearchedMovies(json.results));
    };

    const handleSearch = () => {
        const movie = searchText.current.value;
        searchMovies(movie);
        
    }

    return (
      <div className="pt-[15%] md:pt-[10%] flex justify-center">
        <form
          className="mx-5 w-full md:w-1/2  bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang["en"].gptSearchPlaceholder}
            className="p-2 my-4 mx-2 col-span-9"
          />
          <button
            className="bg-red-700 mr-2 my-4 py-2 px-3 text-white rounded-lg col-span-3"
            onClick={handleSearch}
          >
            {" "}
            {lang["en"].search}
          </button>
        </form>
      </div>
    );
};
export default SearchBar;