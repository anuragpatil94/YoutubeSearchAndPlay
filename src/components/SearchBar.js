import "../stylesheets/SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  onInputChange = event => {
    this.setState({ searchText: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.searchText}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
