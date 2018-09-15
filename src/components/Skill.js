import React, { Component } from "react";

class Skill extends Component {
  render() {
    const { skill } = this.props;

    return <span className="skills-list__single">{skill}</span>;
  }
}

export default Skill;
