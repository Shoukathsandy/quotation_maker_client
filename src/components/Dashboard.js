import React from 'react'
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// import MaterialTable, { Column } from "@material-table/core";
export default function Dashboard() {
  const navigate = useNavigate();
  //   const [tableData,setTableData] = useState([
  // {name:"shoukath",email:"shoukath@gmail.com",gender:"male",city:"villupuram"},
  // {name:"sandy",email:"shoukath@gmail.com",gender:"female",city:"thanjavur"},
  // {name:"mathivanan",email:"shoukath@gmail.com",gender:"male",city:"kangipuram"},
  // {name:"c.m.vijayakumar",email:"shoukath@gmail.com",gender:"female",city:"vellur"},
  // {name:"sachin",email:"shoukath@gmail.com",gender:"male",city:"nellur"},
  // {name:"udhaya",email:"shoukath@gmail.com",gender:"female",city:"chennai"},
  // {name:"naseem",email:"shoukath@gmail.com",gender:"male",city:"kanai"},
  // {name:"rizwana",email:"shoukath@gmail.com",gender:"female",city:"mumbai"},

  //   ]);
  //   const columns =[
  //     {title:"Name",field:"name"},
  //     {title:"Email",field:"email"},
  //     {title:"Gender",field:"gender"},
  //     {title:"City",field:"city"},

  //   ]

  return (
    <div className='dash'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Customers</h5>
                <p class="card-text">Total customer 10</p>
                {/* <a href="#" class="card-link">Customers</a>
    <a href="#" class="card-link">Another link</a> */}
                <Button variant="contained" onClick={() => navigate("/dashboardlayout/Customers")} >Customers</Button>


              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">Vendors</h5>
                <p class="card-text">Total vendors 13</p>
                {/* <a href="#" class="card-link">Customers</a>
    <a href="#" class="card-link">Another link</a> */}
                <Button variant="contained" onClick={() => navigate("/dashboardlayout/Customers")} >Vendor</Button>


              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
              <h5 class="card-title">Products</h5>
                <p class="card-text">Total products 16</p>
                {/* <a href="#" class="card-link">Customers</a>
    <a href="#" class="card-link">Another link</a> */}
                <Button variant="contained" onClick={() => navigate("/dashboardlayout/Customers")} >Product</Button>


              </div>
            </div>
          </div>
        </div>
      </div>

</div>
  
  )
};
