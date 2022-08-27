import React from 'react';
import { useNavigate } from "react-router-dom";
import { API } from "../globel";
import { useEffect, useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import MaterialTable from "@material-table/core";
import "./dashboard.css";

function Vendors() {
    const navigate = useNavigate();
    // const { vendorId } = useParams();
    const [tableData, setTableData] = useState([]);
    const columns =[
        {title:"Vendorlist",field:"vendorlist"},
        {title:"Vendor.Id",field:"vendorId"},
        {title:"Contact",field:"contact"},
        {title:"City",field:"city"},
        
      ]

    const getvendor = (() => {
        fetch(`${API}/Quotation/getvendorlist/`, { method: "GET" })
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
                  <MaterialTable columns={columns} data={tableData}  title="vendor list"
                  actions={[
                    {
                      icon: 'edit',
                      tooltip: 'Edit Row',
                      onClick: (event, rowData) => {
                        console.log(rowData)
                        // Code to display custom Dialog her
                        navigate(`/dashboardlayout/Editvendor/${rowData.vendorId}`)
                      }
                    },
            
                    // {
                    //     icon: 'delete',
                    //     tooltip: 'Delete Row',
                    //     onClick: (event, rowData) => {
                    //       // Code to display custom Dialog here
                          
                    //       navigate("/dashboardlayout/Editvendor")
                    //     }
                    //   },
                      
                  ]}
                  editable={{
                    onRowDelete: (oldData) => {
                      return new Promise((resolve, reject) => {
                        setTimeout(() => {
                          const dataDelete = [...tableData];
                          const target = dataDelete.find(
                            (el) => el.id === oldData.tableData.id
                          );
                          const index = dataDelete.indexOf(target);
                          dataDelete.splice(index, 1);
                          setTableData([...dataDelete]);
                          resolve();
                        }, 1000);
                      });
                    }
                  }}
                  />
            </div>
           
        </>
    )
}

export default Vendors