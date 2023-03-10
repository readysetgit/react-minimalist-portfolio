import React, { Component } from "react";
import "./Sport.scss";

class Sport extends Component {
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
      <div className="sport" onClick={this.toggleExpansion}>
        <div className="flex-row space-between w100">
          <span className="flex-row gap-m">
            <p className="name">
              <span className="material-symbols-outlined">
                {this.props.icon}
              </span>
            </p>
            <span className="skill-level">
              {this.renderSkillBars(this.props.skillbars)}
            </span>
          </span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>
    );
  }

  renderExpandedForm() {
    return (
      <div className="sport expanded" onClick={this.toggleExpansion}>
        <div className="flex-row space-between w100">
          <p className="name">
            {this.props.name}
            <span className="material-symbols-outlined">{this.props.icon}</span>
          </p>
          <span className="material-symbols-outlined">expand_less</span>
        </div>

        <span className="skill-level ptm">
          {this.renderSkillBars(this.props.skillbars)}
        </span>
        <p className="ptl">{this.props.details}</p>
      </div>
    );
  }
}

export default Sport;
