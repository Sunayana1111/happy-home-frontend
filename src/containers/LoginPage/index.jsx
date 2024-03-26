/* eslint-disable react/no-unescaped-entities */
import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/http-request";
import { toast } from "react-toastify";
import CommonLoginCardView from "../../components/CommonLoginCardView";
import { useAuth } from "../../context/AuthContext";

const INITIAL_VALUE = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { loginSuccess } = useAuth();
  const [formValue, setFormValue] = useState(INITIAL_VALUE);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleOnChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      loginUser(formValue)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.token) {
            loginSuccess(data.token);
            toast.success("User LoggedIn Successfully!");
            navigate("/");
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
