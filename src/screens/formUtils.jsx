import React from 'react';

export const validate = (values) => {
  const errors = {}
  if (!values.firstname) {
    errors.firstname = 'Required'
  } else if (values.firstname.length < 2) {
    errors.firstname = 'Minimum be 2 characters or more'
  }
  if (!values.lastname) {
    errors.lastname = 'Required'
  } else if (values.lastname.length < 2) {
    errors.lastname = 'Minimum be 2 characters or more'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  if (!values.role) {
    errors.role = 'Required'
  }
  return errors
};

export const renderField = ({input, placeholder, type, meta: {touched, error, warning}}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && ((error && <span className="text-danger">{error}</span>))}
  </div>
);
