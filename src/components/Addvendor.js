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

export default function Addvendor() {
    const navigate = useNavigate();
    const FormValidationSchema = yup.object({
        Vendorname:yup.string().required(),
        Email : yup.string().email().required(),
        Contact:yup.string().required(),
        City:yup.string().required(),
    })
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { Vendorname:"",Email:"",Contact:"",City:""},
        validationSchema: FormValidationSchema,
        onSubmit: (values) =>  add(values)
    })

    const add=(data)=>{
        

        fetch(`${API}/Quotation/createvendorlist`,
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
            navigate("/dashboardlayout/Vendors");
        }}
        )     
       
       
    }


  return (
    <div >
       <form className='addven' onSubmit={handleSubmit}
           >
            < TextField type="text"
                name="Vendorname"
                label="Vendorname"
                variant="outlined"
                value={values.Vendorname}
                onChange={handleChange}
                error={errors.Vendorname && touched.Vendorname }
                onBlur={handleBlur} 
                helperText={errors.Vendorname && touched.Vendorname ? errors.Vendorname : ""}
                />
                 < TextField type="text"
                name="Email"
                label="Email"
                variant="outlined"
                value={values.Email}
                onChange={handleChange}
                error={errors.Email && touched.Email }
                onBlur={handleBlur} 
                helperText={errors.Email && touched.Email ? errors.Email : ""}
                />
                 < TextField type="text"
                name="Contact"
                label="Contact"
                variant="outlined"
                value={values.Contact}
                onChange={handleChange}
                error={errors.Contact && touched.Contact }
                onBlur={handleBlur} 
                helperText={errors.Contact && touched.Contact ? errors.Contact : ""}
                />
                 < TextField type="text"
                name="City"
                label="City"
                variant="outlined"
                value={values.City}
                onChange={handleChange}
                error={errors.City && touched.City }
                onBlur={handleBlur} 
                helperText={errors.City && touched.City ? errors.City : ""}
                />
             
                <Button type="submit"  variant="contained" >Add Vendor</Button>
                
                </form>
    </div>
  )
}
