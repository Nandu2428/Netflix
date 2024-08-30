import background from "../images/background.jpg";
import SearchBar from "./SearchBar";
import SearchedResults from "./SearchedResults";

const Search = () => {
    return (
      <div>
        <div className="absolute -z-10">
          <img src={background} alt="back" className="h-screen object-cover md:w-screen"></img>
        </div>
        <div className="pt-[30%] md:pt-0">
          <SearchBar />
          <SearchedResults />
        </div>
      </div>
    );



};
export default Search;