import React from 'react';
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Dashboardlayout() {
  const navigate = useNavigate();
  return (
    <>
      <div> 
        {/* <nav className="navbar-expand-lg primary">
        <AppBar position="static">
          <Toolbar>

            <Button color="inherit" >Quotation Maker</Button>
            <div className="log">
              <Button color="inherit" onClick={() => {
                navigate("/login");
              }}>
                <AccountCircleIcon />
              </Button>
              <Button color="inherit" onClick={() => {
                navigate("/login");
              }}>
                <LogoutIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </nav> */}
        <Navbar collapseOnSelect className="border" sticky="top" expand="lg"  bg="primary" variant="dark">
       
          <Container>
             <Navbar.Brand ><b>Quotation Maker</b></Navbar.Brand>
            <Navbar.Toggle className="ms-auto"  aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse   id="responsive-navbar-nav">
              <Nav className="ms-auto"  >
                <Nav.Link > <Button variant="text" className="sbtn alg" color="inherit"
                  onClick={() => navigate("/dashboardlayout/Dashboard")} >Dashboard</Button></Nav.Link>
                <Nav.Link > <Button variant="text" className="sbtn" color="inherit"
                  onClick={() => navigate("/dashboardlayout/Customers")} >Customers</Button>
                </Nav.Link>
                <Nav.Link >  <Button variant="text" className="sbtn" color="inherit"
                  onClick={() => navigate("/dashboardlayout/Vendors")}>Vendors</Button>
                </Nav.Link>
                <Nav.Link >  <Button variant="text" className="sbtn" color="inherit"
                  onClick={() => navigate("/dashboardlayout/Products")}>Products</Button>
                </Nav.Link>
                <Nav.Link >  <Button variant="text" className="sbtn" color="inherit"
                  onClick={() => navigate("/dashboardlayout/Projects")}>Projects</Button>
                </Nav.Link>
                <Nav.Link >  <Button variant="text" className="sbtn" color="inherit"
                  onClick={() => navigate("/dashboardlayout/Quotation")}>Quotation</Button>
                </Nav.Link>
                <Button variant="text" className="sbtn" color="primary">
                <NavDropdown title="Dropdown" id="navbarScrollingDropdown" >
                  <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                  <Button color="inherit" onClick={() => {
                navigate("/login");
              }}>
                <LogoutIcon />Logout
              </Button>
                  </NavDropdown.Item>
                </NavDropdown></Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="container-fluid ma" >
        <div className="row">
          {/* <div className="col-lg-2 col-sm-2 col-md-2">

            <div className="sidebar">
              <div className="gpbt">

                <Button variant="text" className="sbtn" color="primary" onClick={() => navigate("/dashboardlayout/Dashboard")} >Dashboard</Button>
                <Button variant="text" className="sbtn" color="primary" onClick={() => navigate("/dashboardlayout/Customers")} >Customers</Button>
                <Button variant="text" className="sbtn" color="primary" onClick={() => navigate("/dashboardlayout/Vendors")}>Vendors</Button>
                <Button variant="text" className="sbtn" color="primary" onClick={() => navigate("/dashboardlayout/Products")}>Products</Button>
                <Button variant="text" className="sbtn" color="primary" onClick={() => navigate("/dashboardlayout/Projects")}>Projects</Button>
                <Button variant="text" className="sbtn" color="primary" onClick={() => navigate("/dashboardlayout/Quotation")}>Quotation</Button>
              </div>
            </div>

          </div> */}
          <div className="fluid flex" >
            <Outlet />
          </div>
        </div>
      </div>
    </>

  )
}