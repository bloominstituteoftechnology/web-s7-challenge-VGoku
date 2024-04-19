import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    toppings: Yup.array().min(1, 'Select at least one topping'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      toppings: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async request

        console.log('Form submitted:', values);
        setIsSubmitted(true);
        setIsError(false);
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitted(false);
        setIsError(true);
      }
    },
  });

  return (
    <div>
      <h1>Order Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label>Toppings</label>
          {['Cheese', 'Pepperoni', 'Mushrooms', 'Onions'].map((topping) => (
            <div key={topping}>
              <input
                type="checkbox"
                id={topping}
                name="toppings"
                value={topping}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.toppings.includes(topping)}
              />
              <label htmlFor={topping}>{topping}</label>
            </div>
          ))}
          {formik.touched.toppings && formik.errors.toppings ? (
            <div className="error">{formik.errors.toppings}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <div className="success">Thank you for your order!</div>}
      {isError && <div className="failure">Something went wrong</div>}
    </div>
  );
};

export default Form;
