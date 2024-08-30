import { IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({id,posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 pr-2">
      <Link to={"/moviedetails/"+id}>
        <img alt="poster" src={IMAGE_URL + posterPath}></img>
      </Link>
    </div>
  );
    
};
export default MovieCard;