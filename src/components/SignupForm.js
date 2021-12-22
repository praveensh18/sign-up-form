import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../validation/validateInfo';

const SignupForm = ({setUserList}) => {
    
    // using custom hook useForm
    const { handleChange, values, handleFormSubmit, errors } = useForm(setUserList, validate);
  
  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <div className="form-heading">
          <h2>Create Account</h2>
        </div>
        <form className="" onSubmit={handleFormSubmit}>
          <div className="name">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              autoComplete="off"
            />
            {(errors.firstName || !values.firstName)  ?  <p className="error">{errors.firstName}</p> : null}
          </div>

          <div className="name">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.lastName || !values.lastName ? <p className="error">{errors.lastName}</p> : null}
          </div>

          <div className="email">
            <label className="label">Email id</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.email || !values.email ? <p className="error">{errors.email}</p> : null}
          </div>

          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.password || !values.password ? <p className="error">{errors.password}</p> : null}
          </div>

          <div className="button-wrapper">
            <button className="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
