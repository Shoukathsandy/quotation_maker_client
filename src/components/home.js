import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div> <nav className="navbar-expand-lg">
    <AppBar position="static">
      <Toolbar  >
        {/* <Button color="inherit" onClick={() => { navigate('/') }}>Login</Button> */}
        <Button color="inherit" onClick={() => { navigate('/register') }}>person</Button>
        <Button color="inherit" onClick={() => { navigate('/home') }}>Home</Button>

        <div className="log">
          <Button color="inherit" onClick={() => {
        navigate("/login");
      }}>login</Button>
        </div>
      </Toolbar>
    </AppBar>
    </nav></div>
  )
}
