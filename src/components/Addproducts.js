import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../globel';
import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./dashboard.css";

export default function Addproducts() {
    const navigate = useNavigate();
    const FormValidationSchema = yup.object({
        Productname:yup.string().required(),
        ItemNo : yup.string().required(),
        Size:yup.string().required(),
        Price:yup.string().required(),
    })
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { Productname:"",ItemNo:"",Size:"",Price:""},
        validationSchema: FormValidationSchema,
        onSubmit: (values) =>  add(values)
    })

    const add=(data)=>{
        

        fetch(`${API}/Quotation/createproductslist`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
       .then((res)=>res.json())
        .then((data)=>{
        if (data.error) {
            console.log(data.error);
            toast.error(data.error);
        } else {
            console.log(data);
            toast.success(data.msg);
            navigate("/dashboardlayout/Products");
        }}
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
             
                <Button type="submit"  variant="contained" >Add Vendor</Button>
                
                </form>
    </div>
  )
}
