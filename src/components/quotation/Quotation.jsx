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

const sampleDate = [
  { no: 1, product: 10, unit: 1, qty: 1, price: 1 },
  { no: 2, product: 20, unit: 2, qty: 2, price: 2 },
  { no: 3, product: 30, unit: 3, qty: 3, price: 3 },
  { no: 4, product: 40, unit: 4, qty: 4, price: 4 },
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

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <TableRow>
      <TableCell align="center">{text.no}</TableCell>
      <TableCell align="center">
        <TextField id="outlined-basic" label="Code" variant="outlined" />
      </TableCell>
      <TableCell align="center">
        <Select sx={{ width: "180px" }} value={value} label="product" onChange={(e) => setValue(e.target.value)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
  );
};

export default Quotation;
