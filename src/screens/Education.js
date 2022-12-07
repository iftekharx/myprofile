import Container from 'react-bootstrap/esm/Container';

function Education() {
  return (
    <div>
      <section id="education">
        <Container>
          <h1>Education</h1>
          <hr />
          <li>
            <b>
              <p>
                BACHELOR OF SCIENCE - COMPUTER SCIENCE & ENGINEERING June 2022
              </p>
            </b>
          </li>

          <p>
            <i> United International University, Dhaka, Bangladesh</i>
          </p>
          <p> CGPA 3.30 out of 4.00</p>

          <li>
            <b>
              <p>GCE AS A LEVEL June 2016</p>
            </b>
          </li>
          <p>
            <i> S.F.X Green Herald International School, Dhaka, Bangladesh</i>
          </p>
          <p> GPA 2.53 out of 4.00</p>

          <li>
            <b>
              <p>GCE O LEVEL June 2014</p>
            </b>
          </li>
          <p>
            {' '}
            <i>BAF Shaheen English Medium School, Dhaka, Bangladesh</i>
          </p>
          <p> GPA 3.73 out of 4.00</p>
        </Container>
      </section>
    </div>
  );
}

export default Education;
