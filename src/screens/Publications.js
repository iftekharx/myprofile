import Container from 'react-bootstrap/esm/Container';

function Publications() {
  return (
    <div>
      <section id="publications">
        <Container className="">
          <h1>Publications</h1>
        </Container>

        <Container>
          <hr />
        </Container>
        <Container className="d-flex justify-content-center">
          <p>
            <b> Title:</b> “DocBook: Online Interactive Health Care System”, 3rd{' '}
            <br />
            International Conference on Sustainable Technologies for Industry
            <br />
            4.0 (STI), <br />
            18-19 December 2021, Dhaka, Bangladesh.
            <br /> Published on IEEE
            <br />
            Link:{' '}
            <a href="https://ieeexplore.ieee.org/document/9732608">
              https://ieeexplore.ieee.org/document/9732608
            </a>
            <br />
          </p>
        </Container>
      </section>
    </div>
  );
}

export default Publications;
