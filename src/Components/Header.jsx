import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/image.png';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" height={55} width={80} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/collection">COLLECTION</Nav.Link>
            <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
                <SearchIcon/>
            </Nav.Link>
            <Nav.Link>
                <AccountCircleIcon/>
            </Nav.Link>
            <Nav.Link>
                <ShoppingCartIcon/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
