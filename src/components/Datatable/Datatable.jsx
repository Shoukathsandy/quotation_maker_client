import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MaterialTable, { MTableToolbar } from 'material-table';
import { ExportCsv } from "@material-table/exporters";
import ".././dashboard.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { API } from "../../globel";
import { useFormik } from 'formik';
import * as React from "react";
import Button from '@mui/material/Button';
 const Datatable = () => {
  const navigate =useNavigate();
  const [columns, setColumns] = useState([
    { title: "Quotation", field: "quotation" },
    { title: "Products", field: "products", type: "string",  validate: rowData => rowData.products === '' ? { isValid: false, helperText: 'Name cannot be empty' } : true,  },
    { title: "Quantity", field: "quantity", type: "numeric" },
    { title: "Labour Cost", field: "labourCost", type: "numeric" },
    { title: "Transport Cost", field: "transportCost", type: "numeric" },
    { title: "Actual Price", field: "actualPrice", type: "numeric" },
    { title: "tax", field: "tax", type: "numeric" },
    { title: "Billing Price", field: "billingPrice", type: "numeric" },
  ]);
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({


    onSubmit: (data) => {
      tabledetails(data)
    }
});
const tabledetails = (data) => {
    
  fetch(`${API}/Quotation/quotationdata`,
      {
          method: "POST",
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
      }
  )
      .then((response) => response.json())
      .then((data) => {
          if (data.error) {
              console.log(data.error);
              toast.error(data.error);
          } else {
              console.log(data);
              toast.success(data.msg);
              navigate("/dashboardlayout/Quotation");
          }
      })
}
  function ccyFormat(num) {
    if (!num || isNaN(num)) {
      return "0.00";
    }
    return `${num.toFixed(2)}`;
  }
  const [data, setData] = useState([
    // { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    // { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ]);

  const columTotal = function (column) {
    return 1234;
  };
  return (
    <>
      <div className="dash">
        <form onSubmit={handleSubmit}>
        <h3 className="txt">Create Quotation</h3>
        <MaterialTable
        components={{
          Toolbar: props => (
              <div style={{ backgroundColor: '#0AD3DE' }}>
                  <MTableToolbar {...props}  />
              </div>
          )
      }}
          columns={columns}
          data={data}
          title="Add Quotation"
          options={{
            exportButton: true,
          saveButton: true,
            actionsColumnIndex: -1,
            exportMenu: [
              {
                label: "Export CSV",
                exportFunc: (cols, datas) =>
                  ExportCsv(cols, datas, "myCsvFileName"),
              },
            ],
            saveMenu: [
              {
                label: "Export CSV",
                exportFunc: (cols, datas) =>
                  ExportCsv(cols, datas, "myCsvFileName"),
              },
            ],
          }}
         
          renderSummaryRow={({ column, data }) => {
            if (column.field === "actualPrice") {
              return {
                value: data.reduce((agg, row) => agg + row.actualPrice, 0),
                style: {background: "#304FFE",color:"white" },
              };
            }
            if (column.field === "billingPrice") {
              return {
                value: data.reduce((agg, row) => agg + row.billingPrice, 0),
                style: { background: "#304FFE",color:"white" },
              };
            }
            if (column.field === "quantity") {
              return {
                value: data.reduce((agg, row) => agg + row.quantity, 0),
                style: {background: "#304FFE", color:"white" },
              };
            }
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
        />
        <div className="dtbtn">
         <Button
                type="submit"
                className="btn btn-primary"
                variant="contained">save</Button>
                </div>
        </form>
      </div>
    </>
  );
};

export default Datatable;