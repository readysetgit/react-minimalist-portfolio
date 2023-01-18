import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from "react";
import Sport from "./components/Sport/Sport";
import Job from "./components/Job/Job";
import Project from "./components/Project/Project";
import Website from "./components/Website/Website";
import casarecceImage from "./assets/casarecce.png";
import thenormiesImage from "./assets/thenormies.png";
import Chip from "./components/Chip/Chip";

class App extends Component {
  constructor() {
    super();
    // TODO:
    // DONE 1. More links to the top
    // DONE 2. Skills scream "Javk of All Trades", highlight the top 3 skills and fade away in the skills
    // DONE 3. Fix the alignment when cards are expanded
    // DONE 4. Add a chevron to the sports cards
    // 5. Move sports further down
    // DONE 6. Add a footer or a bottom padding
    // 7. Color animation to the website screenshots?

    this.state = {
      sports: {
        tableTennisDetails: `The first time I held a racket was in 7th grade. A couple of years later, the obsession carried me to Nationals in India. Currently enjoying the USA Table tennis world`,
        archeryDetails: `Started last year, the movies show it all wrong! Helped me use muscles I've never used before`,
        rugbyDetails: `Every practice session is deeply satisying, this one's grown pretty close to my heart`,
        boulderingDetails: `I never knew I had a fear of heights! Can't wait to climb again and again.`,
      },

      jobs: [
        {
          name: "University of Illinois at Chicago",
          duration: "1.5 years+",
          years: "09/2021 - ongoing",
          position: "Teaching Assistant",
          techstack: ["Physics 131", "Physics 132"],
        },
        {
          name: "The Normies",
          duration: "5 months",
          years: "08/2022 - 12/2022",
          position: "Web Developer (Internship)",
          techstack: ["HTML", "CSS", "Javascript"],
        },
        {
          name: "Cronycle",
          duration: "2 years",
          years: "07/2019 - 07/2022",
          position: "Software Developer II",
          techstack: ["Angular", "Typescript", "NodeJS", "React", "SCSS"],
        },
        {
          name: "BCS Technology",
          duration: "1 year",
          years: "06/2018 - 06/2019",
          position: "Associate Software Developer",
          techstack: [".NET", ".NET Core", "Angular", "Ruby on Rails"],
        },
      ],

      projects: [
        {
          name: "Sinatra - MVX Browser Updates",
          duration: "5 months",
          years: "08/2022 - 12/2022",
          details: `Worked on instantaneously updating commercial browsers without requiring a restart of the web browser.
          The update switches to a newer version of the browser without losing the open tabs and the associated data state.`,
          techstack: ["Javascript"],
          icon: "web",
        },
        {
          name: "Campus Buddy",
          duration: "5 months",
          years: "08/2022 - 12/2022",
          details: `Created a social media web application called "Campus Buddy" using Angular and Firebase. The application helps UIC students find
          hotspots of activity on and off campus and features map functionality using the Google Places API.`,
          techstack: ["Angular", "Firebase", "Places API"],
          icon: "diversity_4",
        },
        {
          name: "Albatross",
          duration: "5 months",
          years: "08/2022 - 12/2022",
          details: `Created a compiler in C that supported Binary and Unary operations, Conditionals, For loops, While loops, If Else, Variables and
          Functions.`,
          techstack: ["C", "Assembly"],
          icon: "settings",
        },
        {
          name: "Ethereum - open source contribution",
          duration: "5 months",
          years: "08/2022 - 12/2022",
          details: `Identified and fixed a bug in the ethereum-react-native-boilerplate repository.`,
          techstack: ["Java"],
          icon: "currency_bitcoin",
        },
        {
          name: "Hotspots",
          duration: "5 months",
          years: "08/2022 - 12/2022",
          details: `Created a website that uses Google Maps Places API to display points of interest.
          Implemented secure login with password encryption and maintained user sessions using passport.js.
         Automated the deployment process using CI/CD on GitHub Actions and deployed the docker image to Heroku.`,
          techstack: [
            "React",
            "NodeJS",
            "Passport.js",
            "Docker",
            "SQLite",
            "Heroku",
          ],
          icon: "public",
        },
      ],

      websites: [
        {
          name: "The Normies",
          imgUrl: thenormiesImage,
          url: "https://thenormies.com/",
        },
        {
          name: "Casarecce",
          imgUrl: casarecceImage,
          url: "https://www.casarecce.in/",
        },
      ],

      skills: [
        "Angular",
        "RxJS",
        "Node.js",
        "NgRx",
        "HTML",
        "CSS",
        "SASS",
        "LESS",
        "Javascript",
        "Typescript",
        "C/C++",
        "Java",
        "Python",
        "Assembly",
        "MSSQL",
        "SQLite",
        "MongoDB",
        "React",
        "Flask(Python)",
        "Docker",
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-body">
          <div className="container">
            <div className="section-container header-container">
              <h1 className="title-font ptl">Hi, I am Fahad!</h1>
              <p className="description ptm">
                Curiosity manifests itself in various fashions. In my case, this
                curiosity is visible when someone mentions computers or cats.
              </p>
              <div className="links-container ptxl">
                <div
                  className="resume-square"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1aepL4VXde58D97Ik7bQ0R2Kvh653uFVa/view?usp=sharing",
                      "_blank"
                    );
                  }}
                >
                  <span class="material-symbols-outlined">description</span>
                  <p>Resume</p>
                  {/* <span class="material-symbols-outlined">link</span> */}
                </div>
                <div
                  className="resume-square"
                  onClick={() => {
                    window.open(
                      "https://ieeexplore.ieee.org/document/8286110",
                      "_blank"
                    );
                  }}
                >
                  <span class="material-symbols-outlined">description</span>
                  <p>Publication</p>
                  {/* <span class="material-symbols-outlined">link</span> */}
                </div>
                <div
                  className="resume-square"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/fahad24/",
                      "_blank"
                    );
                  }}
                >
                  <span class="material-symbols-outlined">person_add</span>
                  <p>Linkedin</p>
                </div>
                {/* <div
                  className="resume-square"
                  onClick={() => {
                    window.open(
                      "mailto:fahadfile@gmail.com",
                      "_blank"
                    );
                  }}
                >
                  <span class="material-symbols-outlined">email</span>
                  <p>Contact</p>
                </div> */}
              </div>
            </div>


            <div className="section-container xp-container">
              <h1 className="title-font ptl">Experience</h1>
              <p className="description ptm">
                Places that took a chance with me
              </p>
              <div className="square-container ptxl">
                {this.state.jobs.map((j) => (
                  <Job job={j} />
                ))}
              </div>
            </div>

            <div className="section-container projects-container">
              <h1 className="title-font ptl">Projects</h1>
              <p className="description ptm">Some stuff that I've done</p>
              <div className="square-container ptxl">
                {this.state.projects.map((p) => (
                  <Project project={p} />
                ))}
              </div>
            </div>

            <div className="section-container skills-container">
              <h1 className="title-font ptl">Websites</h1>
              <p className="description ptm">
                It'd be weird if a web developer had no websites
              </p>
              <div className="square-container ptxl">
                {this.state.websites.map((w) => (
                  <Website website={w} />
                ))}
              </div>
            </div>

            <div className="section-container skills-container">
              <h1 className="title-font ptl">Skills</h1>
              <p className="description ptm">
                From fixing my grandmother's WiFi to working in startups, I have
                acquired a myriad of technical skills and used many programming
                languages.
              </p>
              <div className="all-chips ptxl">
                {this.state.skills.map((skill, index) => {
                  if (index < 4) {
                    return <Chip classes="" name={skill} />;
                  }
                  return <Chip classes="intermediate" name={skill} />;
                })}
              </div>
            </div>

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
            {/* <div className="section-container skills-container">
              <h1 className="title-font ptl">More links</h1>

            </div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
