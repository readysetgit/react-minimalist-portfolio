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
    
    <div class="container">
        <div class="section-container fun-container">
            <h1 class="title-font">
                Sports
            </h1>
            <p class="description">
                A sound mind in a sound body
            </p>
            <div class="sports-container">
                <div class="sport">
                    <p class="name"><span class="material-symbols-outlined">
                            sports_tennis
                        </span></p>
                    <span class="skill-level">
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar"></span>
                    </span>
                </div>
                <div class="sport expanded">
                    <p class="name"><span class="material-symbols-outlined">
                            sports_tennis
                        </span></p>
                    <span class="skill-level">
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar"></span>
                    </span>
                </div>
                <div class="sport">
                    <p class="name"><span class="material-symbols-outlined">
                            adjust
                        </span></p>
                    <span class="skill-level">
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar "></span>
                        <span class="skill-bar"></span>
                    </span>
                </div>
                <div class="sport">
                    <p class="name"><span class="material-symbols-outlined">
                            sports_rugby
                        </span></p>
                    <span class="skill-level">
                        <span class="skill-bar active"></span>
                        <span class="skill-bar active"></span>
                        <span class="skill-bar "></span>
                        <span class="skill-bar "></span>
                        <span class="skill-bar"></span>
                    </span>
                </div>
                <div class="sport">
                    <p class="name"><span class="material-symbols-outlined">
                            landscape
                        </span></p>
                    <span class="skill-level">
                        <span class="skill-bar active"></span>
                        <span class="skill-bar "></span>
                        <span class="skill-bar "></span>
                        <span class="skill-bar "></span>
                        <span class="skill-bar"></span>
                    </span>
                </div>
            </div>
        </div>
        <div class="section-container xp-container">
            <h1 class="title-font">
                Experience
            </h1>
            <p class="description">
                From fixing my grandmother's WiFi to working in startups, I have acquired a myriad of technical skills and
                used numerous programming languages. Here are some companies I've worked with:
            </p>
            <div class="square-container">
                <div class="company-square">
                    <h2 class="title">
                        The Normies
                    </h2>
                    <p class="metadata">
                        <span class="material-symbols-outlined">
                            schedule
                        </span>
                        5 months
                    </p>
                    <p class="metadata">
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        08/2022 - 12/2022
                    </p>
    
                </div>
                <div class="company-square">
                    <h2 class="title">
                        The Normies
                    </h2>
                    <p class="metadata">
                        <span class="material-symbols-outlined">
                            schedule
                        </span>
                        5 months
                    </p>
                    <p class="metadata">
                        <span class="material-symbols-outlined">
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
