import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, Button, Nav, Navbar as NavBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
	return (
	  <NavBar sticky="bottom" bg="primary" variant="dark">
	    <NavBar.Brand href="/khanna-me/#/"><np>Home</np></NavBar.Brand>
	    <Nav className="mr-auto">
	      <Nav.Link href="https://bohemia420.github.io/khanna-me/#/blog"><np>Blog</np></Nav.Link>
	      <Nav.Link href="https://bohemia420.github.io/khanna-me/#/resume"><np>Resume</np></Nav.Link>
	      <Nav.Link href="https://bohemia420.github.io/khanna-me/#/projects"><np>Projects</np></Nav.Link>
	      <Nav.Link href="https://bohemia420.github.io/khanna-me/#/interests"><np>Interests</np></Nav.Link>
	      <Nav.Link href="https://bohemia420.github.io/khanna-me/#/presence"><np>Presence</np></Nav.Link>
	      <Nav.Link href="https://bohemia420.github.io/khanna-me/#/misc"><np>Misc</np></Nav.Link>
	    </Nav>
	  </NavBar>
	);
}

export default Navbar;