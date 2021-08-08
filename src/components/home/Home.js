import React from 'react'
import './Home.css';
import image from '../../images/linkedin-photo-render.png';

function Home() {
    return (
        <div className="home">
            <div className="home-text">
                <h3>Hi, I'm Zaid.</h3>
                <h1>React.js Developer.</h1>
                <p>Unsatisfied with my career in Pharmacy and Customer Service,  in 2021 I made the jump and pursued my dream of learning to code.</p>
                <p>The pandemic was a tragedy, but it did give me the time to really knuckle down and hone my skills.</p>
                <p>I now have a solid base of experience with ReactJS, Ruby on Rails and related technologies</p>
                <p>I'm also quite interested in building API's, and I am handy with a SQL database.</p>
            </div>
            <img src={image} className="home-image"/>
        </div>
    )
}

export default Home
