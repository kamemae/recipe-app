import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import image from './../../assets/logo.gif';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import { toast } from "react-toastify";

function NavbarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const Navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchTerm) {
      toast.error("Maybe you would do something, and i dont know, MAYBE WRITE SOMETHING?");
      console.log("nie")
      return;
    }

    console.log(searchTerm);
    Navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    searchTerm("");
    
    e.target.reset();
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={image} alt="Logo" style={{ height: "42px" }} className="d-inline-block align-text-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '999px' }}>
            <Nav.Link as={Link} to="/add"><i className="bi bi-plus-square" /> Add new</Nav.Link>
            <Nav.Link as={Link} to="/favorites"><i className="bi bi-heart" /> Favorites</Nav.Link>
            <Nav.Link as={Link} to="/feelinglucky"><i className="bi bi-question-circle" /> I'm feeling lucky</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <input type="text" id="searchbar" placeholder="Search" className="form-control" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
            <Button type="submit" variant="outline-primary"><i className="bi bi-search" /></Button>
          </Form>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;