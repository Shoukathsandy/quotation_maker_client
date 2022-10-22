import React from 'react';
import { useNavigate,useParams } from "react-router-dom";
import { API } from "../globel";
import { useEffect, useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import "./dashboard.css";

function Projects() {
    const navigate = useNavigate();
    const { ProjectId } = useParams();
    const [tableData, setTableData] = useState([]);
    const columns =[
        {title:"Project name",field:"Projectname"},
        {title:"Project Id",field:"ProjectId"},
        {title:"Status",field:"Status"},
        
      ]

    const getvendor = (() => {
        fetch(`${API}/Quotation/getallprojectlist/`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {setTableData(data)})
          
        
    })
    useEffect(() => getvendor(), []);
               
    return (
        <>
        <div className='dash'>
         <Button  variant="contained" onClick={()=>{navigate("/dashboardlayout/Addprojects")}} startIcon={<GroupAddIcon />}>
       Add project
      </Button>
      </div>
        
            <div className='dash'>             
                  <MaterialTable columns={columns} data={tableData}  title="Project list"
                  actions={[
                    {
                      icon: 'edit',
                      tooltip: 'Edit Row',
                      onClick: (event, rowData) => {
                        console.log(rowData)
                        // Code to display custom Dialog her
                        navigate(`/dashboardlayout/Editprojects/${rowData.ProjectId}`)
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
                      onClick: (event, rowData) => navigate(`/dashboardlayout/Deleteproject/${rowData.ProjectId}`)
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

export default Projects