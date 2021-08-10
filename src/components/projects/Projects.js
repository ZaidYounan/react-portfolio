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
                <div className="intro-text">
                    <h1>Previous Work</h1> 
                    <p>Gaining practical experience with full-stack frameworks and technologies...</p>
                    <p>Focusing on practicality and responsiveness...</p>
                </div>
            </div>
            <div className="project">
                <a href="https://fight-club-mz.netlify.app/" className="project-link">
                    <img src={fightclub} className="project-image"/> 
                </a>
                <div className="project-text">
                    <p>
                        Fight Club: Full Stack App built with ReactJS and a Rails API. 
                    </p>
                    <a href="https://fight-club-mz.netlify.app/" className="project-link-text">
                        Learn More <i class="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div className="project">
                <a href="https://imentorapp.herokuapp.com/" className="project-link">
                    <img src={imentor} className="project-image"/> 
                </a>
                <div className="project-text">
                    <p>
                        iMentor: Two-way Marketplace App built in Rails, deployed to Heroku.
                    </p>          
                    <a href="https://imentorapp.herokuapp.com/" className="project-link-text">
                        Learn More <i class="fas fa-chevron-right"></i>
                    </a>      
                </div>
            </div>
            <div className="project">
                <a href="http://weightlogger-hackathon.herokuapp.com/" className="project-link">
                    <img src={weightlogger} className="project-image"/> 
                </a>
                <div className="project-text">
                    <p>
                        WeightLogger (24 Hour Hackathon) - First time using Ruby On Rails
                    </p>
                    <a href="http://weightlogger-hackathon.herokuapp.com/" className="project-link-text">
                        Learn More <i class="fas fa-chevron-right"></i>
                    </a>                
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/ZaidYounan/Sword-crafting-app/" className="project-link">
                    <img src={swordcrafter} className="project-image"/> 
                </a>
                <div className="project-text">
                    <p>
                        SwordCrafter - Terminal App built in Ruby: Create custom ASCII swords based on user input
                    </p>          
                    <a href="https://github.com/ZaidYounan/Sword-crafting-app/" className="project-link-text">
                        Learn More <i class="fas fa-chevron-right"></i>
                    </a>      
                </div>
            </div>
            <div className="extra">&nbsp;</div>
        </div>
    )
}

export default Projects
