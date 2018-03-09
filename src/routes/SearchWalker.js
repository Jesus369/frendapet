import React, { Component } from "react";

import SearchTab from "../searchwalker/SearchTab";
import SearchResultsContainer from "../searchwalker/SearchResultsContainer";

class SearchWalker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      walkers: []
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <SearchTab />
        <SearchResultsContainer />
      </div>
    );
  }
}

export default SearchWalker;
