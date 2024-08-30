import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBack from "./VideoBack";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (movies === null) return;
    const mainMovie = movies[1];
    //console.log(mainMovie);
    const { original_title, overview, id} = mainMovie;
    return (
        <div className="pt-[20%] bg-black md:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBack id={id}/>
        </div>
    )
};
export default MainContainer;
