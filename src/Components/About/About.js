import React from 'react';
import './About.css';
import aboutImg from "../../images/img-1.jpg";

const About = () => {
    return (
        <div className="about-area">
            <div className="about-header">
                <h1>About</h1>
                <p>who i am</p>
            </div>
            <div className="about-content">
                <div className="about-img">
                    <img src={aboutImg} alt="img" />
                </div>
                <div className="about-description">
                    <h1>I'm Zakir and I'm a <span>Developer</span></h1>
                    <br />
                    <p>To be a world-class developer and secure a job in an industry where I can utilize my knowledge for the organization's growth.  I am fully confident about myself to express my talent in any critical situation. <br /><br /> I'm about to graduate in computer science and Engineering, and with this, I have completed a six-month course on web development. <br /><br />
                    I have no industrial experience yet. But I always wanted to work for an IT firm, and want to improve my skills.</p>
                </div>
            </div>
        </div>
    );
};

export default About;