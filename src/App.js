import { useState } from "react";
import "./App.css";

function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }

    if (!values.country) {
      errors.country = "Country is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success-message">
          <h1>Form submitted successfully!</h1>
        </div>
      ) : // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      null}
      <h2>React JS Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label for="firstName">First Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your name.."
              onChange={handleChange}
              value={formValues.firstName}
            />
            <p className="error-message">{formErrors.firstName}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="lastName">Last Name</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name.."
              onChange={handleChange}
              value={formValues.lastName}
            />
            <p className="error-message">{formErrors.lastName}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="country">Country</label>
          </div>
          <div className="col-75">
            <select
              id="country"
              name="country"
              value={formValues.country}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <p className="error-message">{formErrors.country}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="email">Email</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formValues.email}
            />
            <p className="error-message">{formErrors.email}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="password">Password</label>
          </div>
          <div className="col-75">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formValues.password}
            />
            <p className="error-message">{formErrors.password}</p>
          </div>
        </div>

        <br />
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
