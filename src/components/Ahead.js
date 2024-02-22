import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
 
} from "reactstrap";
import { NavLink } from "react-router-dom";
function Ahead(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>


<ul></ul>
      <Navbar {...args} className='navbar-expand-md container-fluid' fixed='top' style={{
        backgroundColor: '#000000',
        padding: '5',
        boxShadow: '2px 0px 10px black'
      }}>
        <NavbarBrand href="/"
          style={{
            color: 'white',
            fontFamily: 'TimesNewRoman',
            fontSize: '3rem',
            padding: '1rem',
            textShadow: '2px 2px 1rem black'
          }}
        >GAMER  SPORTZ..</NavbarBrand>
        <NavbarToggler className="navbar-light" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto mb-2 mb-lg-0 mx-3" navbar
            style={{}}
          ></Nav>
          <Nav>
            
            <NavItem className="me-3"
            >
              
              <NavLink to="/Ahome" className='navlink'
              >DATA</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink className='navlink' to="/Ptable">participants</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink className='navlink' to="/Etable">E-database</NavLink>
            </NavItem>
            </Nav>
            <Nav>
            <div class="dropdown-center">
            <button class="btn btn-warning " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PROFILE
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">LOGIN</a></li>
                  <li><a class="dropdown-item" href="/">LOGOUT</a></li>
                  
                </ul>
                </div>
    </Nav>
            {/* <NavItem className="me-3">
              <NavLink className='text-warning btnhover navlink' to='/'>LOGOUT/</NavLink>
            </NavItem> */}
        </Collapse>
      </Navbar>

      
    </div>
  );
}

export default Ahead;
