import React, { Component } from "react";
import EduTitle from "./EduTitle";

class EducationHistory extends Component {
  render() {
    const { eduList } = this.props;

    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">
          {eduList.map((e, i) => {
            return <EduTitle key={i} eduList={e} />;
          })}
        </div>
      </section>
    );
  }
}

export default EducationHistory;
