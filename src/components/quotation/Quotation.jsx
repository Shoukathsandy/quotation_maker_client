import React, { useState, useEffect, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { QuotationContext } from "../../context/Quotation";
import Stack from "@mui/material/Stack";

const sampleDate = [
  { no: 1, product: "Product-1", unit: 1, qty: 1, price: 1 },
  { no: 2, product: "Product-2", unit: 2, qty: 2, price: 2 },
  { no: 3, product: "Product-3", unit: 3, qty: 3, price: 3 },
  { no: 4, product: "Product-4", unit: 4, qty: 4, price: 4 },
];

const TableRowComponent = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState({ no: "", product: "", unit: "", qty: "", price: "", tax: "", total: "" });
  const { quotations, setQuotations } = useContext(QuotationContext);

  useEffect(() => {
    sampleDate.filter((userValue) => {
      if (userValue.product === value) {
        setText(userValue);
      }
    });
  }, [value]);

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {

  };

  const handleDelete = () => {
    
  };

  return (
    <TableRow>
      <TableCell align="center">{text.no}</TableCell>
      <TableCell align="center">
        <TextField id="outlined-basic" label="Code" variant="outlined" />
      </TableCell>
      <TableCell align="center">
        <Select sx={{ width: "180px" }} value={value} label="product" onChange={(e) => setValue(e.target.value)}>
          <MenuItem value={"Product-1"}>Product-1</MenuItem>
          <MenuItem value={"Product-2"}>Product-2</MenuItem>
          <MenuItem value={"Product-3"}>Product-3</MenuItem>
          <MenuItem value={"Product-4"}>Product-4</MenuItem>
        </Select>
      </TableCell>
      <TableCell align="center">
        <TextField id="outlined-basic" label="Unit" variant="outlined" name="unit" onChange={(e) => handleChange(e)} value={text.unit} />
      </TableCell>
      <TableCell align="center">
        <TextField id="outlined-basic" label="Qty" variant="outlined" value={text.qty} name="qty" onChange={(e) => handleChange(e)} />
      </TableCell>
      <TableCell align="center">
        <TextField id="outlined-basic" label="Price" variant="outlined" value={text.price} name="price" onChange={(e) => handleChange(e)} />
      </TableCell>
      <TableCell align="center">
        <TextField id="outlined-basic" label="Tax" variant="outlined" value={text.tax} name="tax" onChange={(e) => handleChange(e)} />
      </TableCell>
      <TableCell align="center">
        <TextField id="outlined-basic" label="Total" variant="outlined" value={text.total} name="total" onChange={(e) => handleChange(e)} />
      </TableCell>
    </TableRow>
  );
};

const Quotation = () => {
  const [size, setSize] = useState(4);

  return (
    <>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <TextField id="outlined-basic" label="Code" variant="outlined" />
        <TextField id="outlined-basic" label="Code" variant="outlined" />
        <TextField id="outlined-basic" label="Code" variant="outlined" />
      </div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 350 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>S.NO</TableCell>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Unit</TableCell>
                <TableCell align="center">Qty</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Tax</TableCell>
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
              <TableRowComponent />
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <Stack direction="row" spacing={2}>
          <p>Total Price</p>
          <TextField id="outlined-basic" value="" name="tax" />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <p>Total Quantity</p>
          <TextField id="outlined-basic" value="" name="tax" />
        </Stack>
        {/* <Stack direction="row" spacing={2}>
          <p>Item 1</p>
          <TextField id="outlined-basic" value="" name="tax" />
        </Stack> */}
      </div>
    </>
  );
};

export default Quotation;
