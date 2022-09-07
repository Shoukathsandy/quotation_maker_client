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

export default function Addprojects() {
    const navigate = useNavigate();
    const FormValidationSchema = yup.object({
        Projectname:yup.string().required(),
        ProjectId : yup.string().required(),
        Status:yup.string().required(),
  
    })
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { Projectname:"",ProjectId:"",Status:""},
        validationSchema: FormValidationSchema,
        onSubmit: (values) =>  add(values)
    })

    const add=(data)=>{
        

        fetch(`${API}/Quotation/createprojectlist`,
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
            navigate("/dashboardlayout/Projects");
        }}
        )     
       
       
    }


  return (
    <div >
       <form className='addven' onSubmit={handleSubmit}
           >
            < TextField type="text"
                name="Projectname"
                label="Projectname"
                variant="outlined"
                value={values.Projectname}
                onChange={handleChange}
                error={errors.Projectname && touched.Projectname }
                onBlur={handleBlur} 
                helperText={errors.Projectname && touched.Projectname ? errors.Projectname : ""}
                />
                 < TextField type="text"
                name="ProjectId"
                label="ProjectId"
                variant="outlined"
                value={values.ProjectId}
                onChange={handleChange}
                error={errors.ProjectId && touched.ProjectId }
                onBlur={handleBlur} 
                helperText={errors.ProjectId && touched.ProjectId ? errors.ProjectId : ""}
                />
                 < TextField type="text"
                name="Status"
                label="Status"
                variant="outlined"
                value={values.Status}
                onChange={handleChange}
                error={errors.Status && touched.Status }
                onBlur={handleBlur} 
                helperText={errors.Status && touched.Status ? errors.Status : ""}
                />
             
                <Button type="submit"  variant="contained" >Add project</Button>
                
                </form>
    </div>
  )
}
