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

export default function Editquotation() {
  const [rowdata, setRowdata] = useState(null)
  const { QuotationId } = useParams();
  const getvendor = (() => {
    fetch(`${API}/Quotation/getquotationbyid/${QuotationId}`)
      .then((response) => response.json())
      .then((data) => setRowdata(data))


  })
  useEffect(() => getvendor(), [QuotationId]);
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
  const { QuotationId } = useParams();
  const FormValidationSchema = yup.object({
    Name: yup.string().required(),
    QuotationId: yup.string().required(),
    Actualprice: yup.number().required(),
    Tax: yup.string().required(),
    Billingprice:yup.number().required()
  })
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
    initialValues: {
      Name: rowdata.Name,
      QuotationId: rowdata.QuotationId,
      Actualprice: rowdata.Actualprice,
      Tax: rowdata.Tax,
      Billingprice: rowdata.Billingprice
    },
    validationSchema: FormValidationSchema,
    onSubmit: (values) => add(values)
  })

  const add = (data) => {
    fetch(`${API}/Quotation/updatequotation/${QuotationId}`,
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
          toast.error(data.error);
        } else {
          console.log(data);
          toast.success(data.msg);
          navigate("/dashboardlayout/Quotation");
        }
      }
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
        <Button type="submit" variant="contained" >Save Quotation</Button>

      </form>
    </div>
  )
}
