import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// import InputAdornment from "@mui/material/InputAdornment";
// import MailIcon from "@mui/icons-material/Mail";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useState } from "react";
import { API } from "../globel.js";
import "./forgotpassword.css";
import "../App.css";

function Forgotpassword() {
    const [emailstatus, setemailstatus] = useState(null);
    const initialValues = { email: "" };
    const validationSchema = yup.object({
        email: yup.string().email().required(),
    });

    const onSubmit = (values) => forgetpassword(values);

    const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
        useFormik({
            initialValues,
            validationSchema,
            onSubmit,
        });
    function forgetpassword(values) {
        fetch(`${API}/Quotation/forgotpassword`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    toast.error("Error: " + data.error);
                } else {
                    toast.success(data.msg);
                    setemailstatus(data.msg);
                    // localStorage.setItem("pass_token", data.pass_token);
                    // window.location.replace("forgetpassword");
                }
            });
    }
    return (
        <>
            <h3 className="fgbtn">Enter Valid Email</h3>
            <form onSubmit={handleSubmit} className="d-flex user fgbtn" >
                <div className="form-group">
                <TextField className="form-control form-control-user"
                    id="outlined-error-helper-text"
                    label="Email"
                    name="email"
                    values={values.email}
                    // sx={{ m: 1, width: 370 }}
                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment   position="start">
                    //             <MailIcon  />
                    //         </InputAdornment>
                    //     ),
                    // }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={errors.email && touched.email ? errors.email : " "}
                /></div>
        
                <Button
                type="submit"
                className="btn btn-primary btn-user btn-block form-control form-control-user"
                variant="contained">send</Button>
          
            </form>
          
            {emailstatus ? (
                <div className="d-flex">
                    <h5 className="m-5 text-success">
                        Reset password link was send to your email. please check your mail !
                    </h5>
                </div>
            ) : (
                ""
            )}
            
        </>
    )
}

export default Forgotpassword