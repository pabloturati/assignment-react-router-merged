import React, { Component } from "react";
import PortfolioFixed from "./PortfolioFixed";
import PortfolioContent from "./PortfolioContent";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <PortfolioFixed />
        <PortfolioContent />
      </React.Fragment>
    );
  }
}

export default Home;
