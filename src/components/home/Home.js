import React from 'react'
import './Home.css';
import image from '../../images/linkedin-photo-render.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="home-text">
                <h3>Hi, I'm Zaid.</h3>
                <h1>React.js Developer.</h1>
                <p>In <strong>2021</strong>, unsatisfied with my career in Pharmacy and Customer Service, I made the leap and pursued my dream of learning to code.</p>
                <p>The pandemic was a tragedy, but it did give me the time to really knuckle down and hone my skills.</p>
                <p>With time, my interest in coding really blossomed into a passion. I spend much of my free time tinkering, constantly learning. </p>
                <p>Today, I have a solid base of experience with ReactJS, Ruby on Rails and related technologies.</p>
                <p>I'm also quite interested in building API's, and I am handy with a SQL database.</p>
                <p>Have a role that might interest me? You can  <Link to="/contact">contact me here!</Link></p>
            </div>
            <img src={image} className="home-image"/>
        </div>
    )
}

export default Home
