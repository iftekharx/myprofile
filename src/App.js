import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar
            collapseOnSelect
            expand="sm"
            variant="dark"
            className="navbar-custom"
          >
            <Container>
              <Navbar.Brand href="#profile">My Profile</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#objective">Objective</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#publications">Publications</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#techskills">Technical Skills</Nav.Link>
                <Nav.Link href="#personalinfo">Personal Information</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <main className="mainbody">
          <Container>
            <Home />
          </Container>
        </main>
      </div>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
