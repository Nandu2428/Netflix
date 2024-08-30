import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovie } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        //console.log(json.results);
        dispatch(addMovie(json.results));
    };

    useEffect(() => {
        if(!nowPlaying) getNowPlayingMovies();
    });
};
export default useNowPlayingMovies;