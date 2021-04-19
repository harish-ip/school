import React from 'react';
import { Navbar, Nav, Container, FormControl, Button, Form, Row ,Col, Image } from 'react-bootstrap';
import NavbarBootsrap from './NavbarBootsrap.jsx';
class Pricing extends React.Component {
   render() {
      return (
        <Container fluid>
          <NavbarBootsrap></NavbarBootsrap>
          <Row>
          <Col>
          <Image src="./my-school.jpg" style={{'height':'100%'}}>
          </Image>
          </Col>
        <Col>Pricing</Col>
        </Row>
          
        </Container>
      );
   }
}
export default Pricing;