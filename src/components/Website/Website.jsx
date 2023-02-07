import React, { Component } from "react";
import "./Website.scss";
import Chip from "../Chip/Chip";

class Website extends Component {
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
        {/* {this.state.isExpanded === true && this.renderExpandedForm()} */}
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

  visitUrl(url) {
    window.open(url, '_blank')
  }


  renderCollapsedForm() {
    return (
      <div className="company-square" onClick={() => this.visitUrl(this.props.website.url) }>
        <div className="img-container">
          <img
            src={this.props.website.imgUrl}
            alt="Screenshot of 'The Normies' website"
          />
        </div>
        <span className="flex-row v-center flex-center gap-s">
        <h2 className="title">
          {this.props.website.name}
        </h2>
        <span class="material-symbols-outlined">link</span>
        </span>


      </div>
    );
  }

//   renderExpandedForm() {
//     return (
//       <div className="company-square expanded" onClick={this.toggleExpansion}>
//         <h2 className="title">{this.props.website.name}</h2>
//         <div className="all-metadata ptl">
//           <p className="metadata">
//             <span className="material-symbols-outlined">schedule</span>
//             {this.props.website.duration}
//           </p>
//           <p className="metadata">
//             <span className="material-symbols-outlined">calendar_month</span>
//             {this.props.website.years}
//           </p>
//           <p className="metadata">
//             <span className="material-symbols-outlined">badge</span>
//             {this.props.website.position}
//           </p>
//           <div className="all-chips">
//             {this.props.website.techstack &&
//               this.props.website.techstack.map((skill) => (
//                 <Chip name={skill} />
//               ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
}

export default Website;
