import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    return (
      <div>
        VideoList
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </div>
    );
  }
}

export default VideoList;
