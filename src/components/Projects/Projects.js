import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drae from "../../Assets/Projects/drae.png";
import portfolio from "../../Assets/Projects/port.png";
import ComingSoon from "../../Assets/Projects/CS.png";
import weatherAI from "../../Assets/Projects/AIWeather.jpg";
import breakingbad from "../../Assets/Projects/breakingbad.png";
import siamese from "../../Assets/Projects/siamese.jpg";
import airquality from "../../Assets/Projects/Air-Quality.jpg";




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
        ProjectCard imgPath = { siamese }
        isBlog = { false }
        title = "Siamese Network for Few-Shot Learning"
        description = "Implementation of a Siamese Network for few-shot learning using the mini-ImageNet dataset, featuring custom and fine-tuned ResNet-18 models, with evaluations on various n-way k-shot tasks. The project aims to improve the network’s performance by incorporating data augmentation techniques and fine-tuning the model’s hyperparameters. The results demonstrate the network’s ability to learn from limited data, with potential applications in image recognition and classification tasks."
        ghLink="https://github.com/bayoudhif/Siamese-Network-Few-Shot-Learning"
        // demoLink="link"              
        /
        >
        <
        /
        Col >
        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { airquality }
        isBlog = { false }
        title = "ESP32 Air Quality Dashboard"
        description = "An IoT project for air quality monitoring using ESP32, MQTT, InfluxDB, and a Dash web dashboard for real-time data visualization. The project integrates a custom-built air quality sensor with the ESP32 microcontroller to collect data on temperature, humidity, and air quality. The data is transmitted to an MQTT broker and stored in an InfluxDB database, which is then visualized using a Dash web dashboard. The project demonstrates the potential of IoT devices for environmental monitoring and data analysis."
        ghLink="https://github.com/bayoudhif/esp32-air-quality-dashboard"
        // demoLink="link"              
        /
        >
        <
        /
        Col >
        <
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { weatherAI }
        isBlog = { false }
        title = "Comparative Analysis of Machine Learning Models for Weather Forecasting"
        description = "This project focuses on the development and comparison of three machine learning models—Linear Regression, Random Forest, and Neural Network Regressor—to improve the accuracy of temperature forecasts. By utilizing weather data from 2023 and 2024, the project aims to identify the most effective model for temperature prediction at a specific urban location. The results highlight the strengths and weaknesses of each approach, providing insights for future advancements in weather forecasting techniques."
        ghLink = "https://github.com/bayoudhif/WeatherModelComparison"
        //demoLink="link/"
        /
        >
        <
        /Col>

<
        Col md = { 4 }
        className = "project-card" >
        <
        ProjectCard imgPath = { breakingbad }
        isBlog = { false }
        title = "The Heisenberg Enigma: A Java Text Adventure"
        description = "The Heisenberg Enigma: A Java Text Adventure is a modular, object-oriented Java game inspired by Breaking Bad. It features a dynamic command parsing system, interactive NPCs, and a variety of puzzles implemented using custom algorithms. The game architecture is organized into packages for clean code management, with a focus on maintainability. Players engage with a text-based UI to explore iconic locations, solve puzzles, and interact with characters, while file handling ensures progress persistence. The project exemplifies Java best practices in structure and design."
        ghLink = "https://github.com/bayoudhif/TheHeisenbergEngima_JavaTextGame/"
        //demoLink="link/"
        /
        >
        <
        /Col>
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
        /
        Row > <
        /Container> < /
        Container >
    );
}

export default Projects;