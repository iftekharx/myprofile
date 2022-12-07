import Container from 'react-bootstrap/esm/Container';

function Projects() {
  return (
    <div>
      <section id="projects">
        <Container>
          <h1>Projects</h1>
          <hr />
          <p>
            <b>DocBook: An Online Interactive HealthCare System</b>
            It is a medical blogging website where patients can post their
            problem and doctors can prescribe digital prescriptions on it, an
            algorithm is run on the prescriptions and the most similar two
            prescriptions are chosen.
          </p>
          <p>
            Frontend: HTML5, CSS3, Flexbox, Bootstrap 5, JavaScript <br />
            Backend: PHP Laravel 8, jQuery, Database: XAMPP MySQL
          </p>
          <p>
            Link:{' '}
            <a href="https://github.com/iftekhar01bd/docbook/tree/main2">
              https://github.com/iftekhar01bd/docbook/tree/main2
            </a>
          </p>
        </Container>
        <Container>
          <p>
            <b>
              Blog Web Application With Search, Account Login, Registration,
              Blog Create feature.
            </b>
          </p>
          <p>Made using Laravel and Bootstrap.</p>
          <p>
            Link:{' '}
            <a href="https://github.com/iftekharx/blogapp_laravel.git">
              https://github.com/iftekharx/blogapp_laravel.git
            </a>
          </p>
        </Container>
      </section>
    </div>
  );
}

export default Projects;
