import { useNavigate,useParams } from 'react-router-dom';
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

export default function Editvendor() {
  const [rowdata,setRowdata] = useState(null)
  const { vendorId } = useParams();
  const getvendor = (() => {
    fetch(`${API}/Quotation/getvendorlist/${vendorId}`)
        .then((response) => response.json())
        .then((data) => setRowdata(data))
      
    
  })
  useEffect(() => getvendor(), [vendorId]);
  return(
<div>
      {rowdata ? <Edit rowdata={rowdata} /> : <div  class="text-center"><div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div></div>}
    </div>
  )
}
 function Edit({rowdata}) {
    const navigate = useNavigate();
    const { vendorId } = useParams();
    const FormValidationSchema = yup.object({
        vendorlist:yup.string().required(),
        vendorId : yup.string().required(),
        contact:yup.string().required(),
        city:yup.string().required(),
    })
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { 
          vendorlist:rowdata.vendorlist,
          vendorId:rowdata.vendorId,
          contact:rowdata.contact,
          city:rowdata.city},
        validationSchema: FormValidationSchema,
        onSubmit: (values) =>  add(values)
    })

    const add=(data)=>{
        fetch(`${API}/Quotation/${vendorId}`,
        {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
       .then((res)=>res.json())
       .then((data)=>{
        if (data.error) {
            console.log(data.error);
            toast.error("ERROR:" + data.error);
        } else {
            console.log(data);
            toast.success("success:" + data.msg);
            navigate("/dashboardlayout/Vendors");
        }}
        )   
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
                 < TextField 
                 disabled="true"
                 type="text"
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
             
                <Button type="submit" variant="contained" >Save Vendor</Button>
                
                </form>
    </div>
  )
}
