import React from 'react';
import { useNavigate } from "react-router-dom";
import { API } from "../globel";
import { useEffect, useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import MaterialTable from "@material-table/core";
import "./dashboard.css";

export default function Vendorlist() {



    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);
    const columns =[
        {title:"Vendorlist",field:"vendorlist"},
        {title:"Vendor.Id",field:"vendorId"},
        {title:"Contact",field:"contact"},
        {title:"City",field:"city"},
        
      ]

    const getvendor = (() => {
        fetch(`${API}/Quotation/getvendorlist`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {setTableData(data)})
          
        
    })
    useEffect(() => getvendor(), []);
  return (
   <>
     <div className='dash'>
         <Button  variant="contained" onClick={()=>{navigate("/dashboardlayout/Addvendor")}} startIcon={<GroupAddIcon />}>
       Add vendor
      </Button>
      </div>
        
            <div className='dash'>             
                  <MaterialTable columns={columns} data={tableData} title="vendor list"/>
            </div>
   </>
  )
}
