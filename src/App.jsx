import logo from './logo.svg';
import './App.scss';
import React from 'react';

function App() {
  return (
    <React.Fragment>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:display=swap" rel="stylesheet" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="./styles.css" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <div className="container">
        <div className="section-container fun-container">
            <h1 className="title-font">
                Sports
            </h1>
            <p className="description">
                A sound mind in a sound body
            </p>
            <div className="sports-container">
                <div className="sport">
                    <p className="name"><span className="material-symbols-outlined">
                            sports_tennis
                        </span></p>
                    <span className="skill-level">
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar"></span>
                    </span>
                </div>
                <div className="sport expanded">
                    <p className="name"><span className="material-symbols-outlined">
                            sports_tennis
                        </span></p>
                    <span className="skill-level">
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar active"></span>
                        <span className="skill-bar"></span>
                    </span>
                </div>
                <div className="sport">
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
                </div>
            </div>
        </div>
        <div className="section-container xp-container">
            <h1 className="title-font">
                Experience
            </h1>
            <p className="description">
                From fixing my grandmother's WiFi to working in startups, I have acquired a myriad of technical skills and
                used numerous programming languages. Here are some companies I've worked with:
            </p>
            <div className="square-container">
                <div className="company-square">
                    <h2 className="title">
                        The Normies
                    </h2>
                    <p className="metadata">
                        <span className="material-symbols-outlined">
                            schedule
                        </span>
                        5 months
                    </p>
                    <p className="metadata">
                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>
                        08/2022 - 12/2022
                    </p>
    
                </div>
                <div className="company-square">
                    <h2 className="title">
                        The Normies
                    </h2>
                    <p className="metadata">
                        <span className="material-symbols-outlined">
                            schedule
                        </span>
                        5 months
                    </p>
                    <p className="metadata">
                        <span className="material-symbols-outlined">
                            calendar_month
                        </span>
                        08/2022 - 12/2022
                    </p>
    
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default App;
