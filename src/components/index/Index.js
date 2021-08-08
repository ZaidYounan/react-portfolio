import React from 'react'
import { Link } from 'react-router-dom';
import photo from '../../images/photo.jpeg';
import './Index.css';

function Index() {
    return (
        <div className="hero-text">
            <img src={photo} className="index-img"/>
            <h3>Zaid Younan</h3>
            <h1>Web Developer</h1>
            <Link to='/home' className="home-link">
                Enter
            </Link>
        </div>
    )
}

export default Index;