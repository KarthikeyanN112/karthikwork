import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SimpleForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: "300px", margin: "auto" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Name: </label>
        <input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          style={{ display: "block", width: "100%", padding: "5px" }}
        />
        {formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email: </label>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          style={{ display: "block", width: "100%", padding: "5px" }}
        />
        {formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
