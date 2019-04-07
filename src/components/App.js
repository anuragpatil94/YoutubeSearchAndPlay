import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videoList: [] };

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videoList: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail />
        <VideoList videos={this.state.videoList} />
      </div>
    );
  }
}

export default App;
