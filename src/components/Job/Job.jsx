import React, { Component } from "react";
import "./Job.scss";
import Chip from "../Chip/Chip";

class Job extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.isExpanded === false && this.renderCollapsedForm()}
        {this.state.isExpanded === true && this.renderExpandedForm()}
      </div>
    );
  }

  toggleExpansion = () => {
    this.setState((prevState) => ({
      ...this.prevState,
      isExpanded: !prevState.isExpanded,
    }));
  };

  renderSkillBars(numBars) {
    let res = [];
    let i = 0;
    for (; i < numBars; i++) {
      res.push(<span key={i} className="skill-bar active"></span>);
    }
    for (; i < 5; i++) {
      res.push(<span key={i} className="skill-bar"></span>);
    }

    return res;
  }

  renderCollapsedForm() {
    return (
      <div className="company-square flex-row space-between" onClick={this.toggleExpansion}>
        <h2 className="title">{this.props.job.name}</h2>
        <span className="material-symbols-outlined">expand_more</span>

        {/* <div className="all-metadata ptl">
          <p className="metadata">
            <span className="material-symbols-outlined">schedule</span>
            {this.props.job.duration}
          </p>
          <p className="metadata">
            <span className="material-symbols-outlined">badge</span>
            {this.props.job.position}
          </p>
        </div> */}
      </div>
    );
  }

  renderExpandedForm() {
    return (
      <div className="company-square expanded" onClick={this.toggleExpansion}>
        <div className="flex-row space-between w100">
          <h2 className="title">{this.props.job.name}</h2>
          <span className="material-symbols-outlined">expand_less</span>
        </div>
        <div className="all-metadata ptl">
          <p className="metadata">
            <span className="material-symbols-outlined">schedule</span>
            {this.props.job.duration}
          </p>
          <p className="metadata">
            <span className="material-symbols-outlined">calendar_month</span>
            {this.props.job.years}
          </p>
          <p className="metadata">
            <span className="material-symbols-outlined">badge</span>
            {this.props.job.position}
          </p>
          <div className="all-chips">
            { this.props.job.techstack && this.props.job.techstack.map(skill => <Chip name={skill}/>)} 
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
