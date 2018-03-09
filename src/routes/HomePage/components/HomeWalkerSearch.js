import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeWalkerSearch extends Component {
  render() {
    return (
      <div className="home_walker_search">
        <div className="begin_the_search">
          Start your search for a pet technician!
          <Link to="/search-walker" className="walker_search_route">
            Search All
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeWalkerSearch;
