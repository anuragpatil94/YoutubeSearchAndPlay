import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videoList: [], currentVideo: null };

  componentDidMount() {
    this.onSearchSubmit("Anime");
  }

  onSearchSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videoList: response.data.items });
    if (response.data.items.length > 0) {
      this.setState({ currentVideo: response.data.items[0] });
    }
  };

  onVideoSelect = video => {
    this.setState({ currentVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.currentVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videoList}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
