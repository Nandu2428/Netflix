import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTeaser } from "../utils/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(store => store.movies.nowPlayingTeaser);

  const getTeaser = async () => {
       
       const response = await fetch(
         "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
         API_OPTIONS
       );

       const json = await response.json();
       const filteredData = json.results.filter(
         (video) => video.type === "Trailer"
       );

    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    //console.log(trailer);
       dispatch(addTeaser(trailer));
  };
  
  useEffect(() => {
    if (!movieTrailer) getTeaser();
     }, []);
    
};
export default useMovieTrailer;