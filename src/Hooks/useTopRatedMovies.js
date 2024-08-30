import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch} from "react-redux";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    //const topRated = useSelector((store) => store.movies.topRatedMovies);

    const topRatedMovies = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
        topRatedMovies();
    });
};

export default useTopRatedMovies;