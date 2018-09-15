import React, { Component } from "react";
import Job from "./Job";

class WorkHistory extends Component {
  render() {
    const { jobsList } = this.props;

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          {jobsList.map((e, i) => (
            <Job key={i} job={e} />
          ))}
        </div>
      </section>
    );
  }
}

export default WorkHistory;
