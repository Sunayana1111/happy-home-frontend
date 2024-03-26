/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { loginUser } from "../../services/http-request";
import CommonLoginCardView from "../../components/CommonLoginCardView";

const RegisterPage = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = () => {
    debugger;
    console.log(formValue, "hello");
    const response = loginUser();
    console.log(response);
  };

  return (
    <CommonLoginCardView title="User Registration" subTitle="">
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label className="form-label">Fullname</label>
          <input
            type="text"
            name="fullname"
            className="form-control form-control-lg"
            placeholder="Enter your fullname"
            onChange={handleOnChange}
            required
          />
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
          <div className="col-6 ml-5">
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
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            className="form-control form-control-lg"
            id="phoneInput"
            onChange={handleOnChange}
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
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
