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

export default function Addquotation() {
    const navigate = useNavigate();
    const FormValidationSchema = yup.object({
        Name: yup.string().required(),
        QuotationId: yup.string().required(),
        Actualprice: yup.number().required(),
        Tax: yup.string().required(),
        Billingprice:yup.number().required()
      })
    const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
        initialValues: { Name:"",QuotationId:"",Actualprice:"",Tax:"",Billingprice:""},
        validationSchema: FormValidationSchema,
        onSubmit: (values) =>  add(values)
    })

    const add=(data)=>{
        

        fetch(`${API}/Quotation/createquotation`,
        {
            method: "POST",
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
            navigate("/dashboardlayout/Quotation");
        }}
        )     
       
       
    }


  return (
    <div >
       <form className='addven' onSubmit={handleSubmit}
           >
            < TextField type="text"
          name="Name"
          label="Name"
          variant="outlined"
          value={values.Name}
          onChange={handleChange}
          error={errors.Name && touched.Name}
          onBlur={handleBlur}
          helperText={errors.Name && touched.Name ? errors.Name : ""}
        />
        < TextField
          //  disabled="true"
          type="text"
          name="QuotationId"
          label="QuotationId"
          variant="outlined"
          value={values.QuotationId}
          onChange={handleChange}
          error={errors.QuotationId && touched.QuotationId}
          onBlur={handleBlur}
          helperText={errors.QuotationId && touched.QuotationId ? errors.QuotationId : ""}
        />
        < TextField type="text"
          name="Actualprice"
          label="Actualprice"
          variant="outlined"
          value={values.Actualprice}
          onChange={handleChange}
          error={errors.Actualprice && touched.Actualprice}
          onBlur={handleBlur}
          helperText={errors.Actualprice && touched.Actualprice ? errors.Actualprice : ""}
        />
        < TextField type="text"
          name="Tax"
          label="Tax"
          variant="outlined"
          value={values.Tax}
          onChange={handleChange}
          error={errors.Tax && touched.Tax}
          onBlur={handleBlur}
          helperText={errors.Tax && touched.Tax ? errors.Tax : ""}
        />
         < TextField type="text"
          name="Billingprice"
          label="Billingprice"
          variant="outlined"
          value={values.Billingprice}
          onChange={handleChange}
          error={errors.Billingprice && touched.Billingprice}
          onBlur={handleBlur}
          helperText={errors.Billingprice && touched.Billingprice ? errors.Billingprice : ""}
        />
                <Button type="submit"  variant="contained" >Add Quotation</Button>
                
                </form>
    </div>
  )
}
