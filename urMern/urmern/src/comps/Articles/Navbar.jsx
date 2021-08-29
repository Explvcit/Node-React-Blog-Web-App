import React, { Component } from "react";
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./Navbar.css"


class NavBar extends Component {
  render() {
    return (
      <Navbar variant="light" className="sticky links">
    <Container>
    <Navbar.Brand href="/">Articles</Navbar.Brand>
    <Nav >
      <Nav.Link href="/new">Create</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    );
  }
}

export default NavBar;