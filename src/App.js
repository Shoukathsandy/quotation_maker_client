// import Home from "./components/home";
import Layout from "./components/Layout";
import Login from "./components/login";
import Register from "./components/Register";
import Dashboardlayout from "./components/dashboardlayout";
import Forgotpassword from "./components/Forgotpassword";
import { ToastContainer } from 'react-toastify';
import Resetpassword from "./components/Resetpassword";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Vendors from "./components/Vendors";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Quotation from "./components/Quotation";
import Addvendor from "./components/Addvendor";

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div>


      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgotpassword />} />
          <Route path="/reset-password/:id/:pass_token" element={<Resetpassword />} />
        </Route>
        {/* <Route path="/home" element={< Home />} /> */}
        <Route path="/dashboardlayout" element={<Dashboardlayout />} >

          <Route index element={<Dashboard />}/>
          <Route path="/dashboardlayout/Dashboard" element={<Dashboard />}/>
          <Route path="/dashboardlayout/Customers" element={<Customers />}/>
          <Route path="/dashboardlayout/Vendors" element={<Vendors />}/>
           <Route path="/dashboardlayout/Products" element={<Products />}/>
           <Route path="/dashboardlayout/Projects" element={<Projects />}/>
           <Route path="/dashboardlayout/Quotation" element={<Quotation />}/>
           <Route path="/dashboardlayout/Addvendor" element={<Addvendor />}/>
     
        </Route>
       
      </Routes>

      <ToastContainer autoclose={5000} />

    </div>

  );
}

export default App;
