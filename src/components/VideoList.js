import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const videoList = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.etag}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });

    return <div className="ui relaxed divided list">{videoList}</div>;
  }
}

export default VideoList;
