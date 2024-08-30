import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import GPTSearch from "./Search";
import { useSelector } from "react-redux";

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.toggleButton);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch?<GPTSearch />:
      <>
      <MainContainer />
        <SecondaryContainer />
      </>}
  </div>
)};
export default Browse;
