import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Container';

function Contact() {
  return (
    <div>
      <section id="contact">
        <Container className="">
          <h1>Contact</h1>
        </Container>

        <Container>
          <hr />
        </Container>
        <Container className="d-flex justify-content-center">
          <p>
            Email:{' '}
            <a
              id="mail"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=iftekhar814@gmail.com"
            >
              iftekhar814@gmail.com <br />
            </a>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/iftekhar-hyder-34b7b9228/">
              {' '}
              <br />
              https://www.linkedin.com/in/iftekhar-hyder-34b7b9228/ <br />
            </a>
          </p>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
