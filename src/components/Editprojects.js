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

export default function Editprojects() {
  const [rowdata, setRowdata] = useState(null)
  const { ProjectId } = useParams();
  const getvendor = (() => {
    fetch(`${API}/Quotation/getprojectbyid/${ProjectId}`)
      .then((response) => response.json())
      .then((data) => setRowdata(data))


  })
  useEffect(() => getvendor(), [ProjectId]);
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
  const { ProjectId } = useParams();
  const FormValidationSchema = yup.object({
    Projectname:yup.string().required(),
    ProjectId : yup.string().required(),
    Status:yup.string().required(),

})
const { handleChange, handleSubmit, handleBlur, touched, values, errors } = useFormik({
    initialValues: { 
        Projectname: rowdata.Projectname,
        ProjectId: rowdata.ProjectId,
        Status: rowdata.Status,
    },
    validationSchema: FormValidationSchema,
    onSubmit: (values) =>  add(values)
})

  const add = (data) => {
    fetch(`${API}/Quotation/updateprojectdetailsbyid/${ProjectId}`,
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
          navigate("/dashboardlayout/projects");
        }
      }
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

        <Button type="submit" variant="contained" >Save project</Button>

      </form>
    </div>
  )
}
