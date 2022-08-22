import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../globel';
import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import "./dashboard.css";

export default function Addvendor() {
    const navigate = useNavigate();
    const FormValidationSchema = yup.object({
        vendorlist:yup.string().required(),
        vendorId : yup.string().required(),
        contact:yup.string().required(),
        city:yup.string().required(),
    })
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { vendorlist:"",vendorId:"",contact:"",city:""},
        validationSchema: FormValidationSchema,
        onSubmit: (values) =>  add(values)
    })

    const add=(data)=>{
        fetch(`${API}/Quotation/createvendorlist`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'Application/json' }
        })
       .then((res)=>res.json())
        .then((data)=>navigate("/dashboardlayout/Vendors"))        
    }

  return (
    <div >
       <form className='addven' onSubmit={handleSubmit}
           >
            < TextField type="text"
                name="vendorlist"
                label="vendorlist"
                variant="outlined"
                value={values.vendorlist}
                onChange={handleChange}
                error={errors.vendorlist && touched.vendorlist }
                onBlur={handleBlur} 
                helperText={errors.vendorlist && touched.vendorlist ? errors.vendorlist : ""}
                />
                 < TextField type="text"
                name="vendorId"
                label="vendorId"
                variant="outlined"
                value={values.vendorId}
                onChange={handleChange}
                error={errors.vendorId && touched.vendorId }
                onBlur={handleBlur} 
                helperText={errors.vendorId && touched.vendorId ? errors.vendorId : ""}
                />
                 < TextField type="text"
                name="contact"
                label="contact"
                variant="outlined"
                value={values.contact}
                onChange={handleChange}
                error={errors.contact && touched.contact }
                onBlur={handleBlur} 
                helperText={errors.contact && touched.contact ? errors.contact : ""}
                />
                 < TextField type="text"
                name="city"
                label="city"
                variant="outlined"
                value={values.city}
                onChange={handleChange}
                error={errors.city && touched.city }
                onBlur={handleBlur} 
                helperText={errors.city && touched.city ? errors.city : ""}
                />
             
                <Button type="submit" variant="outlined" >Add Vendor</Button>
                
                </form>
    </div>
  )
}
