const VideoTitle = ({ title, overview }) => {
    return (
      <div className=" pt-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black md:pt-52 px-12 sm:pt-14">
        <h1 className="font-bold text-2xl pb-4 mt-md:font-bold text-3xl">{title}</h1>
        <p className="hidden sm:inline-block text-sm w-2/4 pt-2 text-justify md:inline-block text-sm w-72 py-6 text-justify">
          {overview}
        </p>
        <div>
          <button className=" text-black font-bold py-2 px-6 text-xl rounded-lg bg-white hover:bg-opacity-50">
            ▶️ Play
          </button>
          <button className="bg-gray-500 text-white font-bold py-2 px-6 text-xl bg-opacity-65 mx-2 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    );
    
}
export default VideoTitle;