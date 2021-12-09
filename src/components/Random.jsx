import React from 'react';
import 'animate.css';
import me from '../me.jpg';

export default function Random() {
    return (
        <>
        <div className="text animate__animated animate__fadeInLeft">
            <h2>Just a guy from Kentucky, <br /> trying to live my life just like you.</h2>
            <h2>Experience in Full-Stack Development</h2>
            <h2>My love of technology drives me to do <br /> my best on every project!</h2>
        </div>
        <div className="me-photo">
            <img src={me} alt="Devan Chaney" />
        </div>
        </>
    )
}
