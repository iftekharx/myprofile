import Container from 'react-bootstrap/esm/Container';

function PersonalInfo() {
  return (
    <div>
      <section id="personalinfo">
        <Container>
          <h1>Personal Information</h1>
          <hr />

          <div className="bg-light d-flex justify-content-between">
            <p>
              <b>Fathers Name:</b> Zahir Uddin Hyder
            </p>
            <p>
              <b>Mothers Name: </b> Mahmud Rezina Khondoker
            </p>
          </div>
          <div className="bg-light d-flex justify-content-between">
            <p>
              <b>Date of Birth: </b> April 4, 1997
            </p>
            <p>
              <b>Blood Group: </b> B+
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default PersonalInfo;
