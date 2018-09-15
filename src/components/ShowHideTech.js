import React, { Component } from "react";

class ShowHideTech extends Component {
  state = {
    techlistStatus: `techlist--hidden`
  };

  toggleList = () => {
    this.setState({
      techlistStatus:
        this.state.techlistStatus === `techlist--hidden`
          ? `techlist--visible`
          : `techlist--hidden`
    });
  };

  render() {
    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={this.toggleList}>
          + Show Tech
        </button>

        <div className={`techlist ${this.state.techlistStatus}`}>
          <span className="techlist__icon devicons devicons-github_badge" />
          <span className="techlist__icon devicons devicons-git" />
          <span className="techlist__icon devicons devicons-html5" />
          <span className="techlist__icon devicons devicons devicons-css3" />
          <span className="techlist__icon devicons devicons-sass" />
          <span className="techlist__icon devicons devicons-linux" />
          <span className="techlist__icon devicons devicons devicons-nodejs" />
          <span className="techlist__icon devicons devicons devicons-react" />
          <span className="techlist__icon devicons devicons-mysql" />
          <span className="techlist__icon devicons devicons devicons-illustrator" />
        </div>
      </section>
    );
  }
}

export default ShowHideTech;
