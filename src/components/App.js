import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videoList: [], currentVideo: null };

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videoList: response.data.items
    });
  };

  onVideoSelect = video => {
    this.setState({ currentVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail video={this.state.currentVideo} />
        <VideoList
          videos={this.state.videoList}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
