import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drae from "../../Assets/Projects/drae.png";
import portfolio from "../../Assets/Projects/port.png";
import ComingSoon from "../../Assets/Projects/CS.png";




function Projects() {
    return ( <
        Container fluid className = "project-section" >
        <
        Particle / >
        <
        Container >
        <
        h1 className = "project-heading" >
        My Recent < strong className = "purple" > Works < /strong> < /
        h1 > <
        p style = {
            { color: "white" }
        } >
        Here are a few projects I 've worked on recently. < /
        p > <
        Row style = {
            { justifyContent: "center", paddingBottom: "10px" }
        } >
        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { drae }
        isBlog = { false }
        title = "Object Detection Web Based Application"
        description = "A Web Based Application for specific object recognition  built with Flask Bootstrap , SQLite with SQLAlchemy as ORM. "
        ghLink = "https://github.com/bayoudhif/web-based-application-object-detection"
        //demoLink="link/"
        /
        >
        <
        /Col>

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { portfolio }
        isBlog = { false }
        title = "Personal Portfolio"
        description = "Self Developed personal website built with React.js"
        // ghLink="ghlink"
        //   demoLink="link"
        /
        >
        <
        /
        Col >

        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { ComingSoon }
        isBlog = { false }
        title = "Coming Soon!"
        description = "Coming Soon!"
        // ghLink="ghlink"
        // demoLink="link"              
        /
        >
        <
        /
        Col >



        <
        /
        Row > <
        /Container> < /
        Container >
    );
}

export default Projects;