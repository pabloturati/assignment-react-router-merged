import React, { Component } from "react";

class EduTitle extends Component {
  render() {
    const { institute, fieldOfStudy, dates } = this.props.eduList;

    return (
      <div className="degree">
        <h5 className="degree__institute">{institute} </h5>
        <p className="degree__field">{fieldOfStudy}</p>
        <p className="degree__dates">{dates}</p>
      </div>
    );
  }
}

export default EduTitle;
