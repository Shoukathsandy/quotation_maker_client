import React from "react";
import KeyIcon from "@mui/icons-material/Key";
import { useFormik } from "formik";
import * as yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import { blueGrey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { API } from "../globel.js";
function Resetpassword() {
  const { pass_token } = useParams();

  const initialValues = {
    password: "",
    confirmpassword: "",
    pass_token: pass_token,
  };
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmpassword: yup
      .string()
      .required("Please Enter your confirm password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const onSubmit = (values) => reset(values);

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  function reset(values) {
    fetch(`${API}/Quotation/resetpassword`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          toast.error("Error: " + data.error);
        } else {
          toast.success("Success: " + data.msg);
          localStorage.removeItem("pass_token");
          window.location.replace("/");
        }
      });
  }
  return (
    <>
      <h3 className="text-uppercase m-5 tex">Reset password </h3>
      <form onSubmit={handleSubmit}>
        <div className="row  my-2 mx-5">
          <TextField
            id="outlined-error-helper-text"
            label="password"
            type="password"
            name="password"
            values={values.password}
            autoComplete="current-password"
            sx={{ m: 1, width: 370 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password && touched.password}
            helperText={
              errors.password && touched.password ? errors.password : " "
            }
          />
        </div>
        <div className="row  my-2 mx-5">
          <TextField
            id="outlined-error-helper-text"
            label="Confirm password"
            type="password"
            name="confirmpassword"
            values={values.confirmpassword}
            autoComplete="current-password"
            sx={{ m: 1, width: 370 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirmpassword && touched.confirmpassword}
            helperText={
              errors.confirmpassword && touched.confirmpassword
                ? errors.confirmpassword
                : " "
            }
          />
        </div>
        <div className="row my-2 mx-5">
          <Button
            variant="contained"
            className="btn-login"
            sx={{ m: 1, width: 100, bgcolor: blueGrey[900] }}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </>
  );
}

export default Resetpassword;
