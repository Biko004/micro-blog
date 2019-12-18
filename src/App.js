import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import TweetList from './components/TweetList';
import Profile from './components/Profile';
import { Container, Row, Col, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (

      <Router>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>


        <Switch>
          <Route exact path="/">
            <Container className="main">
              <Row>
                <Col></Col>
                <Col xs={6}>
                  <TweetList />
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Route>
          <Route path='/profile'>
          <Container className="main">
          <Profile userName={'test'}/>
          </Container>
            
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
