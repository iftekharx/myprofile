import Container from 'react-bootstrap/esm/Container';

function TechSkills() {
  return (
    <div>
      <section id="techskills">
        <Container>
          <h1>Technical Skills</h1>
          <hr />
          <b>
            {' '}
            <p>Programming Languages: </p>
          </b>{' '}
          <p>
            <b>Java</b>, <b>Python</b>, C, C++,{' '}
            <b>PHP, HTML, CSS, JavaScript</b>, Latex
          </p>
          <b>
            {' '}
            <p>Frameworks: </p>
          </b>
          <p>
            Laravel, Reactjs, Nodejs, Django, Scikit-learn, Pandas, Java Swing,
            Flutter
          </p>
          <b>
            {' '}
            <p>Database Systems: </p>
          </b>
          <p>MySQL</p>
          <b>
            {' '}
            <p>Version Control: </p>
          </b>
          <p>GitHub, Git</p>
          <b> </b>
          <p></p>
          <b>
            {' '}
            <p>Cloud platform used</p>
          </b>{' '}
          <p>Firebase</p>
        </Container>
      </section>
    </div>
  );
}

export default TechSkills;
