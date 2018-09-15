import React, { Component } from "react";
import Skill from "./Skill";

class SkillsList extends Component {
  render() {
    const { skills } = this.props;

    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          {skills.map((e, index) => {
            return <Skill key={index} skill={e} />;
          })}
        </div>
      </section>
    );
  }
}

export default SkillsList;
