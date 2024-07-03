import React from "react";
import './About.css';
import aboutImg from "../../assets/img_2.jpeg";
//import img from "../../assets/img4.jpeg";

const About = () => {
    return (
        <div  id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={aboutImg} width="200px" height="450px" border="1px" alt="About"></img>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am frontend developer ,I have had the privilege with prestigious organization contributing to their success.</p>
                        <p>I am passionate about frontend development</p>
                    </div>
                    <div className="about-skills">
                        <div className="skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="skill">
                            <p>Java</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="skill">
                            <p>React Js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h2>4TH Rank</h2>
                    <p>University rank in BCA Graduate</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h2>Certificate</h2>
                    <p>Excel Skills</p>
                </div>
                <hr/>

            </div>
        </div>
    );
};

export default About;
