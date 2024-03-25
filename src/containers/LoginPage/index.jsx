/* eslint-disable react/no-unescaped-entities */
import "./style.scss";
import { useState } from "react";
import { loginUser } from "../../services/http-request";
import CommonLoginCardView from "../../components/CommonLoginCardView";

const LoginPage = () => {
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
    <CommonLoginCardView
      title="Login Page"
      subTitle="Welcome to Homecare Login Page. Please enter your details to
                  sign in to your account!"
    >
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control form-control-lg"
            placeholder="Enter your username"
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
          value="Sign In"
        />
      </form>
      <span className="py-3 dashboard-container__introduction__already_account_text">
        Don't have an account? <a href="/register">Register here</a>
      </span>
    </CommonLoginCardView>
  );
};

export default LoginPage;
