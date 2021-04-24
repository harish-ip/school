import React from 'react';
import { Navbar, Nav, Container, FormControl, Button, Form } from 'react-bootstrap';
class NavbarBootsrap extends React.Component {
   render() {
      return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">School</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      );
   }
}
export default NavbarBootsrap;