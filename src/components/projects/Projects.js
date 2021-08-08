import React from 'react';
import './Projects.css';
import image from '../../images/linkedin-photo-render.png';
import fightclub from '../../images/fight-club.png';
import imentor from '../../images/imentor.png';
import weightlogger from '../../images/weightlogger.png';
import swordcrafter from '../../images/swordcrafter.png';


function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-intro">
                <h1 className="intro-text">Previous Work</h1> 
                <img src={image} className="intro-image"/>
            </div>
            <div className="project">
                <img src={fightclub} className="project-image"/> 
                <div className="project-text">
                    <p>Full Stack App built with ReactJS and a Rails API</p>
                </div>
            </div>
            <div className="project">
                <img src={imentor} className="project-image"/> 
                <div className="project-text">
                    <p>Marketplace App built in Rails, deployed to Heroku</p>                
                </div>
            </div>
            <div className="project">
                <img src={weightlogger} className="project-image"/> 
                <div className="project-text">
                    <p>24 Hour Hackathon - First time using Ruby On Rails</p>                
                </div>
            </div>
            <div className="project">
                <img src={swordcrafter} className="project-image"/> 
                <div className="project-text">
                    <p>Terminal App built in Ruby - Create custom ASCII swords based on user input</p>                
                </div>
            </div>
        </div>
    )
}

export default Projects
