import React from 'react';
import { useNavigate } from "react-router-dom";
import { API } from "../globel";
import { useEffect, useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import MaterialTable from "@material-table/core";
import "./dashboard.css";

function Products() {
    const navigate = useNavigate();
    // const { vendorId } = useParams();
    const [tableData, setTableData] = useState([]);
    const columns =[
        {title:"Productname",field:"Productname"},
        {title:"ItemNo",field:"ItemNo"},
        {title:"Size",field:"Size"},
        {title:"Price/kg",field:"Price"},
        
      ]

    const getvendor = (() => {
        fetch(`${API}/Quotation/getproductlist/`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {setTableData(data)})
          
        
    })
    useEffect(() => getvendor(), []);
    
    return (
        <>
        <div className='dash'>
         <Button  variant="contained" onClick={()=>{navigate("/dashboardlayout/Addproducts")}} startIcon={<GroupAddIcon />}>
       Add Product
      </Button>
      </div>
        
            <div className='dash'>             
                  <MaterialTable columns={columns} data={tableData}  title="Product list"
                  actions={[
                    {
                      icon: 'edit',
                      tooltip: 'Edit Row',
                      onClick: (event, rowData) => {
                        console.log(rowData)
                        // Code to display custom Dialog her
                        navigate(`/dashboardlayout/Editproducts/${rowData.ItemNo}`)
                      }
                    },
            
                    {
                        icon: 'delete',
                        tooltip: 'Delete Row',
                        onClick: (event, rowData) => {
                          // Code to display custom Dialog here
                          
                          
                        }
                      },
                      
                  ]}
                  // editable={{
                  //   onRowDelete: (oldData) => {
                  //     return new Promise((resolve, reject) => {
                  //       setTimeout(() => {
                  //         const dataDelete = [...tableData];
                  //         const target = dataDelete.find(
                  //           (el) => el.id === oldData.tableData.id
                  //         );
                  //         const index = dataDelete.indexOf(target);
                  //         dataDelete.splice(index, 1);
                  //         setTableData([...dataDelete]);
                  //         resolve();
                  //       }, 1000);
                  //     });
                  //   }
                  // }}
                  options={{
                    actionsColumnIndex: -1
                  }}
                  />
            </div>
           
        </>
    )
}

export default Products