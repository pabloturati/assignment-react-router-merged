import React, { Component } from "react";
import Header from "./Header";
import Summary from "./Summary";
import ContactInfo from "./ContactInfo";
import WorkHistory from "./WorkHistory";
import SkillsList from "./SkillsList";
import EducationHistory from "./EducationHistory";
import ShowHideTech from "./ShowHideTech";
import FilterProjects from "./FilterProjects";
import { Switch, Route } from "react-router-dom";

//Data
import { skills, eduList, jobsList } from "../data/datasource";

class PortfolioContent extends Component {
  render() {
    return (
      <div className="portfolio-content">
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return (
                <React.Fragment>
                  <Header />
                  <Summary />
                  <ContactInfo />
                  <SkillsList skills={skills} />
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/cv"
            component={() => {
              return (
                <React.Fragment>
                  <EducationHistory eduList={eduList} />
                  <WorkHistory jobsList={jobsList} />
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/skills"
            component={() => {
              return (
                <React.Fragment>
                  <ShowHideTech />
                  <FilterProjects />
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default PortfolioContent;
