import React from 'react';
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Outlet } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Dashboardlayout() {
  const navigate = useNavigate();
  return (
    <>
      <div> <nav className="navbar-expand-lg primary">
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
      </nav></div>
      <div className="container-fluid ma" >
        <div className="row">
          <div className="col-lg-2">
            <div>
              <div className="sidebar">
                <div className="gpbt">
                  <Button variant="outlined" color="primary" onClick={()=>navigate("/dashboardlayout/Dashboard")} >Dashboard</Button>
                  <Button variant="outlined" color="primary" onClick={()=>navigate("/dashboardlayout/Customers")} >Customers</Button>
                  <Button variant="outlined" color="primary" onClick={()=>navigate("/dashboardlayout/Vendors")}>Vendors</Button>
                  <Button variant="outlined" color="primary" onClick={()=>navigate("/dashboardlayout/Products")}>Products</Button>
                  <Button variant="outlined" color="primary" onClick={()=>navigate("/dashboardlayout/Projects")}>Projects</Button>
                  <Button variant="outlined" color="primary" onClick={()=>navigate("/dashboardlayout/Quotation")}>Quotation</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <Outlet />
          </div>
        </div>
      </div>

    </>

  )
}