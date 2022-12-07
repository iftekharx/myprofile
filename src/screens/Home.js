import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Column from 'react-bootstrap/esm/Container';
import Contact from './Contact';
import Education from './Education';
import Objective from './Objective';
import Work from './Work';
import Publications from './Publications';
import Projects from './Projects';
import PersonalInfo from './PersonalInfo';
import TechSkills from './TechSkills';

function Home() {
  return (
    <div className="d-flex justify-content-center about">
      <Column>
        <section id="home">
          {' '}
          <br />
          <br />
          <Container className="d-flex justify-content-center">
            <img src={'./myprofile/images/pic.jpeg'} alt="Profile Picture" />
          </Container>
        </section>
        <Container className="d-flex justify-content-center">
          <h1>Iftekhar Hyder</h1>
        </Container>

        <Contact></Contact>
        <Objective></Objective>
        <Work></Work>
        <Education></Education>
        <Publications></Publications>
        <Projects></Projects>
        <TechSkills></TechSkills>
        <PersonalInfo></PersonalInfo>
      </Column>
    </div>
  );
}
export default Home;
