import React, { Component } from "react";
import "./Project.scss";
import Chip from "../Chip/Chip";
class Project extends Component {
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

  renderCollapsedForm() {
    return (
      <div className="project" onClick={this.toggleExpansion}>
        <div className="flex-row space-between w100">
          <div className="flex-row gap-m">
            <p className="name">
              <span className="material-symbols-outlined">
                {this.props.project.icon}
              </span>
            </p>
            <span className="name">{this.props.project.name}</span>
          </div>
          <span className="material-symbols-outlined">expand_more</span>

        </div>
      </div>
    );
  }

  renderExpandedForm() {
    return (
      <div className="project expanded" onClick={this.toggleExpansion}>
        <div className="flex-row space-between w100">
          <p className="name">
            <span className="material-symbols-outlined">
              {this.props.project.icon}
            </span>
            {this.props.project.name}
          </p>
          <span className="material-symbols-outlined">expand_less</span>
        </div>


        <p className="ptl">{this.props.project.details}</p>
        <div className="all-chips">
          {this.props.project.techstack &&
            this.props.project.techstack.map((skill) => <Chip name={skill} />)}
        </div>
      </div>
    );
  }
}

export default Project;
