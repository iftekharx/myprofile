import Container from 'react-bootstrap/esm/Container';

function Work() {
  return (
    <div>
      <section id="work">
        <Container>
          <h1>Work Experience</h1>
          <hr />
          <p>
            <Container>
              <div className="bg-light d-flex justify-content-between">
                <b>
                  <p>United International University</p>
                </b>
                <p>Dhaka Bangladesh</p>
              </div>
            </Container>
            <br />
            <Container>
              <div className="bg-light d-flex justify-content-between">
                <i>
                  {' '}
                  <p>Research Assistant</p>
                </i>
                <p>January 2022 - June 2022</p>
              </div>
            </Container>
            <br />
            <hr />
            <Container>
              <p>
                Assisted in writing the research paper on “An Integrated
                Architecture for Cloud and IoT based Smart City: Smart
                Healthcare Perspective”.
              </p>
            </Container>
          </p>
        </Container>
      </section>
    </div>
  );
}

export default Work;
