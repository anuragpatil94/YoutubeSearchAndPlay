import "../stylesheets/VideoItem.css";

import React from "react";

class VideoItem extends React.Component {
  render() {
    console.log(this.props.video);

    const title = this.props.video.snippet.title;
    const thumbnail = this.props.video.snippet.thumbnails.medium.url;
    return (
      <div className="video-item item">
        <img className="ui image" src={thumbnail} alt="abc" />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
