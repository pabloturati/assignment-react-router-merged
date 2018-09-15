import React, { Component } from "react";

class Job extends Component {
  render() {
    const { title, company, description, years } = this.props.job;
    const { start, end } = years;
    return (
      <div className="job">
        <div className="job__years">
          <h6 className="job__end">{start}</h6>
          <h6 className="job__start">{end}</h6>
        </div>
        <h5 className="job__title">{title}</h5>
        <h5 className="job__company">{company}</h5>
        <p className="job__description">{description}</p>
      </div>
    );
  }
}

export default Job;
