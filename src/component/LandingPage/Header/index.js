import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { userContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assests/images/we.png'

function Header() {
  const navigate=useNavigate();
  
  const logout = ()=>{
    dispatch({
      type:'LOGOUT'
    })
    navigate('/');
  } 
  const login = ()=>{
   
    navigate('/login');
    dispatch({
      type:'LOGIN'
    })
  }
  const [state,dispatch]=useContext(userContext);
  return (
    
    <Navbar >
      <Container>
        <Navbar.Brand className='.nav-logo'
href="#home"><img src={logo}   width="30"
height="30"
className="d-inline-block align-top"
 /></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' style={{ textDecoration: 'none' }}><Nav.Link >Home</Nav.Link></Link>
            
            <NavDropdown  title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Company</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href="#link">Company</Nav.Link>
            <Nav.Link  href="#link">Help</Nav.Link>
            {
              state.isAuth?(
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              ):(
               <Nav.Link onClick={login}>SignUp/Login</Nav.Link>
              )
            }
           
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

