import React from 'react';
import './Projects.css';
import project1 from "../../images/how-to-estimate-a-web-application-development-project.png";
import teamMaker from "../../images/team-maker.PNG";
import mess from "../../images/mess.jpg";

const Projects = () => {
    return (
        <div className="projects-area">
            <div className="projects-header">
                <h1>My projects</h1>
                <p>what i provide</p>
            </div>
            <div className="projects-content">
                <div className="projects-card">
                    <img src={mess} alt="" />
                    <h1>My Mess</h1>
                    <p>HTML, CSS, JavaScript, PHP, MySQL</p>

                    <button><a href="https://github.com/MdZakirHossainBhuiyan/my-mess">Github Code</a></button>
                </div>
                <div className="projects-card">
                <img src={project1} alt="" />
                    <h1>Bangladesh Tour and Travel Community</h1>
                    <p>HTML, CSS, JavaScript, PHP, MySQL</p>

                    <button><a href="https://github.com/MdZakirHossainBhuiyan/Bangladesh-Tour-and-travel-community">Github Code</a></button>

                </div>
                <div className="projects-card">
                <img src={teamMaker} alt="" />
                    <h1>Team Maker</h1>
                    <p>React, React-Bootstrap, Rest API</p>

                    <div className="card-btn">
                        <button><a href="https://github.com/MdZakirHossainBhuiyan/epl-team-maker" >Github Code</a></button>
                        <button><a href="https://naughty-poitras-099c8a.netlify.app/">Live Preview</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;