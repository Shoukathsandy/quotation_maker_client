import React from 'react';
import { useNavigate,useParams } from "react-router-dom";
import { API } from "../globel";
import { useEffect, useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
// import { ExcelExport } from '@progress/kendo-react-excel-export';
import "./dashboard.css";

function Quotations() {
    const navigate = useNavigate();
    const { QuotationId } = useParams();
    const [tableData, setTableData] = useState([]);
    const columns =[
        {title:"Name",field:"Name"},
        {title:"Quotation Id",field:"QuotationId"},
        {title:"Actual Price",field:"Actualprice"},
        {title:"Tax",field:"Tax"},
        {title:"Billing Price",field:"Billingprice"},
        
      ]

    const getvendor = (() => {
        fetch(`${API}/Quotation/getallquotationlist/`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {setTableData(data)})
          
        
    })
    useEffect(() => getvendor(), []);
    
    return (
        <>
        <div className='dash'>
         <Button  variant="contained" onClick={()=>{navigate("/dashboardlayout/Addquotation")}} startIcon={<GroupAddIcon />}>
       Add Quotation
      </Button>
      </div>
        
            <div className='dash'>             
                  <MaterialTable columns={columns} data={tableData}  title="Quotation list" 
                  actions={[
                    {
                      icon: 'edit',
                      tooltip: 'Edit Row',
                      onClick: (event, rowData) => {
                        console.log(rowData)
                        // Code to display custom Dialog her
                        navigate(`/dashboardlayout/Editquotations/${rowData.QuotationId}`)
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
                      onClick: (event, rowData) => navigate(`/dashboardlayout/Deletequotation/${rowData.QuotationId}`)
                    },
                    // {
                    //   icon:()=><Button>Export</Button>,
                    //   tooltip:"Export to Excel",
                    //   onClick
                    // }
                      
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



export default Quotations