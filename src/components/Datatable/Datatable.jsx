import { useState } from "react";
import MaterialTable from "@material-table/core";
import { ExportCsv } from "@material-table/exporters";
import ".././dashboard.css";
const Datatable = () => {
  const [columns, setColumns] = useState([
    { title: "Quotation", field: "quotation" },
    { title: "Products", field: "products" },
    { title: "Quantity", field: "quantity", type: "numeric" },
    { title: "Labour Cost", field: "labourCost", type: "numeric" },
    { title: "Transport Cost", field: "transportCost", type: "numeric" },
    { title: "Actual Price", field: "actualPrice", type: "numeric" },
    { title: "tax", field: "tax", type: "numeric" },
    { title: "Billing Price", field: "billingPrice", type: "numeric" },
  ]);
  const [data, setData] = useState([
    // { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    // { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ]);
  return (
    <div className="dash">
      <h3 className="txt">Create Quotation</h3>
      <MaterialTable
        columns={columns}
        data={data}
        title="Add Quotation"
        options={{
          exportButton: true,
          actionsColumnIndex: -1,
          exportMenu: [
            {
              label: "Export CSV",
              exportFunc: (cols, datas) => ExportCsv(cols, datas, "myCsvFileName"),
            },
          ]
         
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
    </div>
  );
};

export default Datatable;
