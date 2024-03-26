/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
// import { registerUser } from "../../services/http-request";
import CommonLoginCardView from "../../components/CommonLoginCardView";
import { registerUser } from "../../services/http-request";
// import axios from "axios";

const RegisterPage = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
    gender: "",
    age: 0,
    phone: "",
    address: "",
  });

  const handleOnChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = registerUser(formValue);
      if (response.message) {
        // Request was successful
        console.log("Data successfully sent");
      } else {
        // Request failed
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <CommonLoginCardView title="User Registration" subTitle="">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3 d-flex">
          <div className="col-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="first_name"
              className="form-control form-control-lg"
              placeholder="Enter your first name"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-6 pl-5">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="last_name"
              className="form-control form-control-lg"
              placeholder="Enter your last name"
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 d-flex">
          <div className="col-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control form-control-lg"
              id="pageInput"
              onChange={handleOnChange}
              placeholder="Enter Your Age"
            />
          </div>
          <div className="col-6 pl-5">
            <label className="form-label">Gender</label>
            <select
              className="form-select form-select-lg"
              name="gender"
              aria-label="Enter Your Age"
              onChange={handleOnChange}
              placeholder="Select you Gender"
            >
              <option selected>Enter Your Age</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-3 d-flex">
          <div className="col-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control form-control-lg"
              id="phoneInput"
              onChange={handleOnChange}
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="col-6 pl-5">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control form-control-lg"
              placeholder="Enter your address"
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 d-flex">
          <div className="col-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control form-control-lg"
              placeholder="Enter username"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-6 pl-5">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 d-flex">
          <div className="col-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              id="passwordInput"
              onChange={handleOnChange}
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="col-6 pl-5">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="password2"
              className="form-control form-control-lg"
              id="password2Input"
              onChange={handleOnChange}
              placeholder="Enter Confirm Password"
              required
            />
          </div>
        </div>
        <input
          className="btn btn-primary btn-lg w-100 mt-2"
          type="submit"
          value="Sign Up"
        />
      </form>
      <span className="py-3 dashboard-container__introduction__already_account_text">
        Already have an account? <a href="/login">Login here</a>
      </span>
    </CommonLoginCardView>
  );
};

export default RegisterPage;
