import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div id="#NavBar">
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand>
            <Link to="/">Funky Hotel</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Rooms" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/getRooms">View Rooms</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/postRooms">Add Rooms</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/updateRooms">Update Rooms</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/deleteRooms">Delete Rooms</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Reservations" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/getReservations">View Reservations</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/postReservations">Add Reservations</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/updateReservations">Update Reservations</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/deleteReservations">Delete Reservations</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Navbar.Brand>
                <Link to="/graphql">GraphQL</Link>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
