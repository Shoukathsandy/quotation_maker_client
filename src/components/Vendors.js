import React from 'react';
import { useNavigate,useParams } from "react-router-dom";
import { API } from "../globel";
import { useEffect, useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import "./dashboard.css";

function Vendors() {
    const navigate = useNavigate();
    const { Email } = useParams();
    const [tableData, setTableData] = useState([]);
    const columns =[
        {title:"Vendorname",field:"Vendorname"},
        {title:"Email",field:"Email"},
        {title:"Contact",field:"Contact"},
        {title:"City",field:"City"},
        
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
                        navigate(`/dashboardlayout/Editvendor/${rowData.Email}`)
                      }
                    },
            
                    // {
                    //     icon: 'delete',
                    //     tooltip: 'Delete Row',
                    //     onClick: (event, rowData) => {
                    //       // Code to display custom Dialog here
                          
                          
                    //     }
                    //   },
                    {
                      icon: 'delete',
                      tooltip: 'Delete Row',
                      onClick: (event, rowData) => navigate(`/dashboardlayout/Deletevendor/${rowData.Email}`)
                    }
                      
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
                    actionsColumnIndex: -1,
                    exportButton: true,
                    saveButton: true,
                    exportMenu: [
                      {
                        label: "Export PDF",
                        exportFunc: (cols, datas) => 
                        ExportPdf(cols, datas, "myPdfFileName"),
                      },
                      {
                        label: "Export CSV",
                        exportFunc: (cols, datas) =>
                          ExportCsv(cols, datas, "myCsvFileName"),
                      },
                    ],
                  }}
                  />
            </div>
           
        </>
    )
}

export default Vendors