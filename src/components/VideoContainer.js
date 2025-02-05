import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import VideoCard, { BorderedVideoCard } from "./VideoCard";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  // const NewComponent = BorderedVideoCard(VideoCard); //This is an higer order component

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap cursor-pointer">
      {/* <NewComponent info={videos[0]}/>  This is example of higher order components */}
      {videos && videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
