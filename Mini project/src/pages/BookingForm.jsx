import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useSubmitBooking from '../hooks/useSubmitBooking';
import { useBooking } from '../contexts/BookingContext';

const BookingSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  guests: Yup.number().min(1, 'At least 1').required('Required'),
  destination: Yup.string().required('Please select a destination')
});

export default function BookingForm() {
  const { submitBooking } = useSubmitBooking();
  const { dispatch } = useBooking();

  const initialValues = { 
    name: '', 
    email: '', 
    guests: 1, 
    destination: '' 
  };

  return (
    <div>
      <h1>Book Your Package</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          try {
            const result = await submitBooking(values);
            dispatch({ type: 'ADD_BOOKING', payload: result });
            setStatus({ success: true });
            resetForm();
          } catch (err) {
            setStatus({ success: false, error: err.message });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>

            <div className="mb-3">
              <label>Name</label>
              <Field name="name" className="form-control" />
              <div className="text-danger"><ErrorMessage name="name" /></div>
            </div>

            <div className="mb-3">
              <label>Email</label>
              <Field name="email" className="form-control" />
              <div className="text-danger"><ErrorMessage name="email" /></div>
            </div>

            <div className="mb-3">
              <label>Guests</label>
              <Field name="guests" type="number" className="form-control" />
              <div className="text-danger"><ErrorMessage name="guests" /></div>
            </div>

            {/* ⭐ New Dropdown Field */}
            <div className="mb-3">
              <label>Destination</label>
              <Field as="select" name="destination" className="form-control">
                <option value="">Select destination</option>
                <option value="Kerala">Kerala</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Himalayas">Himalayas</option>
                <option value="Goa">Goa</option>
                <option value="Rajasthan">Rajasthan</option>
              </Field>
              <div className="text-danger"><ErrorMessage name="destination" /></div>
            </div>

            <button type="submit" className="btn btn-success" disabled={isSubmitting}>
              Submit Booking
            </button>

            {status?.success && <div className="alert alert-success mt-3">Booking created!</div>}
            {status?.error && <div className="alert alert-danger mt-3">{status.error}</div>}

          </Form>
        )}
      </Formik>
    </div>
  );
}
