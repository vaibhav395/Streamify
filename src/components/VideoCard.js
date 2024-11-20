const VideoCard = ({info})=>{
    if(!info) return null;
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet
    return(
        <div className="p-2 m-2 w-64 h-[330px] shadow-lg rounded-lg">
            <img className="rounded-md" src={thumbnails.medium.url} alt="thumbnail"/>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{(statistics.viewCount)} views</li>
            </ul>
        </div>
    )
}

export const BorderedVideoCard = (VideoCard)=>{
    return ({info})=>{
        return <div className="border border-red-500">
        <VideoCard info={info}/>
        </div>
    }
}

export default VideoCard;