const VideoCard = ({info})=>{
    console.log(info)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet
    return(
        <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
            <img className="rounded-md" src={thumbnails.medium.url} alt="thumbnail"/>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;