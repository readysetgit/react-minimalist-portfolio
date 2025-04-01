import logo from "./logo.svg";
import "./App.scss";
import React, { Component } from "react";
import Sport from "./components/Sport/Sport";
import Job from "./components/Job/Job";
import Project from "./components/Project/Project";
import Website from "./components/Website/Website";
import casarecceImage from "./assets/casarecce.png";
import thenormiesImage from "./assets/thenormies.png";
import rotaGeneratorImage from "./assets/rota_generator.png";

import Chip from "./components/Chip/Chip";

class App extends Component {
  constructor() {
    super();
    // TODO:
    // 1. Add in IN PROGRESS section
    // 2. Color animation to the website screenshots?

    this.state = {
      sports: {
        tableTennisDetails: `The first time I held a racket was in 7th grade. A couple of years later, the obsession carried me to Nationals in India. Currently enjoying the USA Table tennis world`,
        archeryDetails: `Started last year, the movies show it all wrong! Helped me use muscles I've never used before`,
        rugbyDetails: `Every practice session is deeply satisying, this one's grown pretty close to my heart`,
        boulderingDetails: `I never knew I had a fear of heights! Can't wait to climb again and again.`,
      },
      jobs: [
        {
          name: "FastModel Sports, Chicago",
          duration: "1.5 years",
          details:
            "Achieved a 300% market expansion by adding soccer, volleyball, and football to the platform, supporting clients including NBA, WNBA, NCAA, and Olympic teams. Engineered a workaround to Shopify Plus saving $24,000 annually and targeting an $840,000 high school market. Boosted sales by $100,000+ through FastIntelligence AI integration and fixed critical bugs that impacted over 100 coaches.",
          years: "10/2023 - 02/2025",
          position: "Software Engineer, Frontend",
          techstack: ["React", "NodeJS", "Shopify", "AI", "A/B Testing"]
        },
        {
          name: "The Normies LLC (Remote)",
          duration: "Ongoing",
          details:
            "Improved video gallery load speeds by 2800% by fixing thumbnail sizing issues. Optimized UI/UX for Contact Us and Partnerships pages using HCI principles. Designed a high-impact Affiliates page that boosted partner engagement.",
          years: "06/2023 - Present",
          position: "Web Developer",
          techstack: ["HTML", "CSS", "JavaScript"]
        },
        {
          name: "University of Illinois at Chicago",
          duration: "1.5 years+",
          details: "Held office hours and graded assignments for PHYS 131 and 132 (Introductory Physics for Life Sciences II). Course taught by Professor Richard DeJonghe and Jan-Hendrik Spille.",
          years: "09/2021 - ongoing",
          position: "Teaching Assistant",
          techstack: ["Physics 131", "Physics 132"]
        },
        {
          name: "Cronycle, India",
          duration: "2 years",
          details: "Streamlined publishing by integrating 7 platforms, cutting publishing time by 90%. Migrated Angular 7 to Angular 9, reducing load times by 25 seconds across 100+ components.",
          years: "07/2019 - 01/2021",
          position: "Software Development Engineer II",
          techstack: ["Angular", "Typescript", "NodeJS", "React", "SCSS"]
        },
        {
          name: "BCS Technology, India",
          duration: "1 year",
          details: "Tutored 10+ colleagues in advanced RxJS and async programming. Fixed 100+ UI bugs across airline websites. Worked with ASP.NET, .NET Core, and Ruby on Rails.",
          years: "06/2018 - 06/2019",
          position: "Associate Software Developer",
          techstack: [".NET", ".NET Core", "Angular", "Ruby on Rails"]
        }
      ],
      projects: [
        {
          name: "Calenduh — Generative AI Calendar",
          duration: "Ongoing",
          years: "02/2025",
          details: `Built an AI-powered assistant that automated Google Calendar scheduling, reducing manual planning time by over 70%. Integrated OpenAI’s GPT API to interpret commands like “Plan my 3-day workout.” Currently expanding features with voice command support and accessibility tools.`,
          techstack: ["React", "Node.js", "OpenAI API", "Google Calendar API"],
          icon: "calendar_month"
        },
        {
          name: "ER Rota Generator — Automated Scheduling System",
          duration: "Ongoing",
          years: "2024",
          details: `Developed a React-based rota generator to automate ER shift scheduling, reducing manual work and ensuring fair doctor distribution. Enforced constraints like minimum staffing per shift and enabled CSV exports for hospital systems.`,
          techstack: ["React", "CSV", "Scheduling Logic"],
          icon: "schedule"
        },
        {
          name: "Casarecce — E-Commerce for Artisanal Pasta",
          duration: "Ongoing",
          years: "2023",
          details: `Launched a responsive online store for Casarecce (now Casa Pasta Bar), India’s first artisanal pasta bar. Added WhatsApp-based support to reduce cart abandonment and improve satisfaction.`,
          techstack: ["React", "E-commerce", "WhatsApp API"],
          icon: "storefront"
        }
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
        {
          name: "Rota Generator",
          imgUrl: rotaGeneratorImage,
          url: "https://rota-generator.web.app/rota-generator",
        }
      ],
      skills: [
        "Angular", "React", "RxJS", "Node.js", "NgRx", "HTML", "CSS", "SASS", "LESS",
        "Javascript", "Typescript", ".NET", ".NET Core", "C#", "C/C++", "Java", "Python",
        "Assembly", "MSSQL", "SQLite", "MongoDB", "PostgreSQL", "Graphql", "NextJS",
        "PostGIS", "OpenAI", "Google APIs", "Redux", "D3", "Docker", "Azure", "AWS",
        "CircleCI", "Heroku", "NameCheap", "Google Cloud", "Git", "VS Code", "IntelliJ",
        "Android Studio", "Figma", "Jira"
      ]
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
                  return <Chip classes="" name={skill} />;
                  // if (index < 4) {
                  //   return <Chip classes="" name={skill} />;
                  // }
                  // return <Chip classes="intermediate" name={skill} />;
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
