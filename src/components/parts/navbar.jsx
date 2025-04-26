import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import image from './../../assets/logo.gif';
import "bootstrap-icons/font/bootstrap-icons.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
           <img src={image} alt="Logo" style={{ height:"42px" }} className="d-inline-block align-text-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '999px' }}>
            <Nav.Link href="#action2"><i class="bi bi-plus-square"/> Add new</Nav.Link>
            <Nav.Link href="#action3"><i class="bi bi-heart"/> Favourites</Nav.Link>
            <Nav.Link href="#action4"><i class="bi bi-question-circle"/> I'm feeling lucky</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="wa-p3" aria-label="Search" />
            <Button variant="outline-primmary"><i className="bi bi-search"/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;