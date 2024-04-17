/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
// import { registerUser } from "../../services/http-request";
import { useNavigate } from "react-router-dom";
import LoginCardView from "../../components/LoginCardView";
import { registerUser } from "../../services/http-request";
import { toast } from "react-toastify";

const INITIAL_VALUE = {
  email: "",
  username: "",
};

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(INITIAL_VALUE);

  const handleOnChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      registerUser(formValue)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.message) {
            toast.success(JSON.stringify(data.message));
            setFormValue(INITIAL_VALUE);
            navigate("/login");
          } else {
            toast.error(JSON.stringify(data));
          }
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error(JSON.stringify(error));
    }
  };

  return (
    <LoginCardView title="Forgot Password" subTitle="">
      <form onSubmit={onSubmitHandler}>
        <div className="col-12 mb-3 mt-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            maxLength="50"
            className="form-control form-control-lg"
            placeholder="Enter username"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            maxLength="50"
            className="form-control form-control-lg"
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <input
          className="btn btn-primary btn-lg w-100 mt-2"
          type="submit"
          value="Confirm"
        />
      </form>
      <span className="py-3 dashboard-container__introduction__already_account_text">
        <>
          {" "}
          Login with another account! <a href="/login">Login here</a>{" "}
        </>
      </span>
    </LoginCardView>
  );
};

export default ForgotPasswordPage;
