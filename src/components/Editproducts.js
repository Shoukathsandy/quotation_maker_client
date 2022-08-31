import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../globel';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./dashboard.css";

export default function Editproduct() {
  const [rowdata, setRowdata] = useState(null)
  const { ItemNo } = useParams();
  const getproduct = (() => {
    fetch(`${API}/Quotation/getproductlist/${ItemNo}`)
      .then((response) => response.json())
      .then((data) => setRowdata(data))


  })
  useEffect(() => getproduct(), [ItemNo]);
  return (
    <div>
      {rowdata ? <Edit rowdata={rowdata} /> :
        <div class="load">
          <div className="spinner-grow text-primary" role="status">
            {/* <span class="sr-only">Loading...</span> */}
          </div>
        </div>}
    </div>
  )
}
function Edit({ rowdata }) {
  const navigate = useNavigate();
  const { ItemNo } = useParams();
  const FormValidationSchema = yup.object({
    Productname: yup.string().required(),
    ItemNo: yup.string().required(),
    Size: yup.string().required(),
    Price: yup.string().required(),
  })
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
    initialValues: {
      Productname: rowdata.Productname,
      ItemNo: rowdata.ItemNo,
      Size: rowdata.Size,
      Price: rowdata.Price
    },
    validationSchema: FormValidationSchema,
    onSubmit: (values) => add(values)
  })

  const add = (data) => {
    fetch(`${API}/Quotation/${ItemNo}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data);
          console.log(data.error);
          toast.error("ERROR:" + data.error);
        } else {
          console.log(data);
          toast.success("success:" + data.msg);
          navigate("/dashboardlayout/Products");
        }
      }
      )
  }



  return (
    <div >
      <form className='addven' onSubmit={handleSubmit}
      >
           < TextField type="text"
                name="Productname"
                label="Productname"
                variant="outlined"
                value={values.Productname}
                onChange={handleChange}
                error={errors.Productname && touched.Productname }
                onBlur={handleBlur} 
                helperText={errors.Productname && touched.Productname ? errors.Productname : ""}
                />
                 < TextField type="text"
                name="ItemNo"
                label="ItemNo"
                variant="outlined"
                value={values.ItemNo}
                onChange={handleChange}
                error={errors.ItemNo && touched.ItemNo }
                onBlur={handleBlur} 
                helperText={errors.ItemNo && touched.ItemNo ? errors.ItemNo : ""}
                />
                 < TextField type="text"
                name="Size"
                label="Size"
                variant="outlined"
                value={values.Size}
                onChange={handleChange}
                error={errors.Size && touched.Size }
                onBlur={handleBlur} 
                helperText={errors.Size && touched.Size ? errors.Size : ""}
                />
                 < TextField type="text"
                name="Price"
                label="Price"
                variant="outlined"
                value={values.Price}
                onChange={handleChange}
                error={errors.Price && touched.Price }
                onBlur={handleBlur} 
                helperText={errors.Price && touched.Price ? errors.Price : ""}
                />
             
                <Button type="submit"  variant="contained" >save product</Button>

      </form>
    </div>
  )
}
