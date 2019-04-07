import "../stylesheets/VideoItem.css";

import React from "react";

class VideoItem extends React.Component {
  render() {
    const video = this.props.video;
    const title = video.snippet.title;
    const thumbnail = video.snippet.thumbnails.medium.url;
    return (
      <div
        className="video-item item"
        onClick={() => this.props.onVideoSelect(video)}
      >
        <img className="ui image" src={thumbnail} alt="abc" />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
