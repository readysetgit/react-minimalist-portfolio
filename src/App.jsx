import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from "react";
import Sport from "./components/Sport/Sport";
import Job from "./components/Job/Job";
class App extends Component {
  constructor() {
    super();
    this.state = {
      sports: {
        tableTennisDetails: `The first time I held a racket was in 7th grade. A couple of years later, the obsession carried me to National level tournaments. I'm currently stepping into the USA Table Tennis world`,
        archeryDetails: `Started last year, it's a lot of fun. I've discovered muscles on my back that I didn't know existed`,
        rugbyDetails: `Every practice session is deeply satisying, can't believe I didn't discover this sport sooner`,
        boulderingDetails: `This is so much fun, discovered that I have a fear of heights! Can't wait to do it again and again.`,
      },
    
        
      jobs: {
        thenormies: {
            name:'The Normies',
            duration: '5 months',
            years: '08/2022 - 12/2022',
            position: 'Web Developer (Internship)',
            techstack: ['Wordpress', 'HTML/CSS/JS']
        },
        cronycle: {
            name:'Cronycle',
            duration: '2 years',
            years: '07/2019 - 07/2022',
            position: 'Software Developer II',
            techstack: ['Angular', 'Typescript', 'NodeJS', 'React', 'SCSS']
    
        },
        bcs: {
            name:'BCS Technology',
            duration: '1 year',
            years: '06/2018 - 06/2019',
            position: 'Associate Software Developer',
            techstack: ['.NET Core', 'Angular']
    
        },
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link rel="stylesheet" href="./styles.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />

        <div className="container-body">
          <div className="container">
          <div className="section-container fun-container">
            <h1 className="title-font ptl">Sports</h1>
            <p className="description ptm">A sound mind in a sound body</p>
            <div className="sports-container ptxl">
              <Sport
                name="Table Tennis"
                icon="sports_tennis"
                skillbars="4"
                details={this.state.sports.tableTennisDetails}
              />
              <Sport
                name="Rugby"
                icon="sports_rugby"
                skillbars="2"
                details={this.state.sports.rugbyDetails}
              />
              <Sport
                name="Bouldering"
                icon="landscape"
                skillbars="1"
                details={this.state.sports.boulderingDetails}
              />
              <Sport
                name="Archery"
                icon="adjust"
                skillbars="3"
                details={this.state.sports.archeryDetails}
              />

              {/* <div className="sport">
                    <p className="name"><span className="material-symbols-outlined">
                            adjust
                        </span></p>
                    <span className="skill-level">
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar "></span>
                        <span className="skill-bar"></span>
                    </span>
                </div>
                <div className="sport">
                    <p className="name"><span className="material-symbols-outlined">
                            sports_rugby
                        </span></p>
                    <span className="skill-level">
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar "></span>
                        <span className="skill-bar "></span>
                        <span className="skill-bar"></span>
                    </span>
                </div>
                <div className="sport">
                    <p className="name"><span className="material-symbols-outlined">
                            landscape
                        </span></p>
                    <span className="skill-level">
                        <span className="skill-bar active"></span>
                        <span className="skill-bar "></span>
                        <span className="skill-bar "></span>
                        <span className="skill-bar "></span>
                        <span className="skill-bar"></span>
                    </span>
                </div> */}
            </div>
          </div>
          <div className="section-container xp-container">
            <h1 className="title-font ptl">Experience</h1>
            <p className="description ptm">
              Places that took a chance with me
            </p>
            <div className="square-container ptxl">
                <Job job={this.state.jobs.thenormies}/>
                <Job job={this.state.jobs.cronycle}/>
                <Job job={this.state.jobs.bcs}/>

              {/* <div className="company-square">
                <h2 className="title">The Normies</h2>
                <p className="metadata">
                  <span className="material-symbols-outlined">schedule</span>5
                  months
                </p>
                <p className="metadata">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                  08/2022 - 12/2022
                </p>
              </div> */}
            </div>
          </div>

          <div className="section-container projects-container">
            <h1 className="title-font ptl">Projects</h1>
            <p className="description ptm">
              Some stuff that I've done
            </p>
            <div className="square-container ptxl">
                <Job job={this.state.jobs.thenormies}/>
                <Job job={this.state.jobs.cronycle}/>
                <Job job={this.state.jobs.bcs}/>
            </div>
          </div>


          <div className="section-container skills-container">
            <h1 className="title-font ptl">Skills</h1>
            <p className="description ptm">
            From fixing my grandmother's WiFi to working in startups, I have acquired a myriad of technical skills and programming languages.
            </p>
            <div className="square-container ptxl">
                <Job job={this.state.jobs.thenormies}/>
                <Job job={this.state.jobs.cronycle}/>
                <Job job={this.state.jobs.bcs}/>
            </div>
          </div>

          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default App;
