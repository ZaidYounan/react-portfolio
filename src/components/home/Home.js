import React from 'react'
import './Home.css';
import image from '../../images/linkedin-photo-render.png';

function Home() {
    return (
        <div className="home">
            <h1>You're home!!!</h1>
            <img src={image} className="home-image"/>
        </div>
    )
}

export default Home
