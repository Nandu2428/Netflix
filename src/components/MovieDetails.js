import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
import rating from "../images/rating.png";
import { Link } from "react-router-dom";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState(null);
    const fetchData = async () => {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US",API_OPTIONS
        );
        const json = await response.json();
        setDetails(json);
        //console.log(json);
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log(details);
    if (!details) return null;
    const { title, overview, tagline, release_date, backdrop_path, genres, vote_average } = details;
    
    const { poster_path } = details?.belongs_to_collection || details;

    return (
      <div className="h-screen bg-[#192e4e] sm:pb-10 bg-[#192e4e] md:h-fit w-screen bg-[#192e4e]">
        <img
          alt="image of poster"
          src={IMAGE_URL + backdrop_path}
          className="absolute h-fit w-screen -z-1 bg-no-repeat bg-cover opacity-[0.1]"
        ></img>
        <div className="relative pl-10 pt-10">
          <Link to="/browse" className="border text-white p-2 ">Back To Movies</Link>
        </div>
        <div className="flex">
          <div className="relative mt-10 ml-10 pb-36 w-3/5">
            
            <img alt="image of poster" src={IMAGE_URL + poster_path}></img>
          </div>
          <div className="relative mt-36 ml-8 text-white">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="pb-4 pl-10 font-light text-xl">-{tagline}</p>
            <p className="font-bold flex mb-2">
              <img src={rating} alt="rating" className="w-5 mr-2" />
              {vote_average.toFixed(1)}/10
            </p>
            <p className="mb-2 text-justify mr-16 text-sm">{overview}</p>
            <p className="font-bold text-lg">Release Date: {release_date}</p>
            <h1 className="font-bold text-lg">Genres</h1>
            {genres.map((genre) => (
              <li>{genre.name}</li>
            ))}
          </div>
        </div>
      </div>
    );
};
export default MovieDetails;