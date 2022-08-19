import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../globel';
import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Addvendor() {
    const navigate = useNavigate();
    const FormValidationSchema = yup.object({
        vendorlist:yup.string().required(),
    })
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { vendorlist:""},
        validationSchema: FormValidationSchema,
        onSubmit: (values) => {
            add(values);
            console.log(values);
        }
    })

    const add=(data)=>{
        fetch(`${API}/Quotation/createvendorlist`,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'Application/json' }
        })
       .then((res)=>res.json())
        .then((data)=>console.log(data))        
    }

  return (
    <div>
       <form onSubmit={handleSubmit}
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
                <div>
                <Button  variant="outlined" >Add movie</Button>
                </div>
                </form>
    </div>
  )
}
