import React from 'react'
import { Link } from 'react-router-dom';
import photo from '../../images/photo.jpeg';
import './Index.css';

function Index() {
    return (
        <div className="hero-text">
            <img src={photo} className="index-img"/>
            <h1>Zaid Younan</h1>
            <h3>Web Developer</h3>
            <Link to='/home' className="home-link">
                Home
            </Link>
        </div>
    )
}

export default Index;