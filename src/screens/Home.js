import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Column from 'react-bootstrap/esm/Container';
import Contact from './Contact';
import Education from './Education';
import Objective from './Objective';
import Work from './Work';
import Publications from './Publications';
import Projects from './Projects';
import TechSkills from './TechSkills';

function Home() {
  return (
    <div className="d-flex justify-content-center about">
      <Column>
        <section id="home"></section>
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
      </Column>
    </div>
  );
}
export default Home;
