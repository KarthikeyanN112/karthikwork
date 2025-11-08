import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addBook } from "../store/actions";

const schema = Yup.object({
  title: Yup.string().required("Title required"),
  author: Yup.string().required("Author required"),
  price: Yup.number().required("Price required").positive(),
});

export default function AddBook() {
  return (
    <div className="card p-4">
      <h3>Add New Book</h3>
      <Formik
        initialValues={{ title: "", author: "", price: "" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          addBook(values);
          resetForm();
          alert("Book added successfully!");
        }}
      >
        <Form>
          <div className="mb-3">
            <label>Title</label>
            <Field name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label>Author</label>
            <Field name="author" className="form-control" />
            <ErrorMessage name="author" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label>Price</label>
            <Field name="price" type="number" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-success">Add Book</button>
        </Form>
      </Formik>
    </div>
  );
}
