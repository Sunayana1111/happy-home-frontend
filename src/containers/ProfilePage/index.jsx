import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/http-request";
import { toast } from "react-toastify";
import { getCookie } from "../../utils/setCookie";
import MyImage from "../../assets/images/user.jpg";
import "./style.scss";

const INITIAL_VALUE = {
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
};

const ProfilePage = () => {
  const isUserLoggedIn = getCookie("token");
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
  console.log(isUserLoggedIn, "user loggedIn");

  return (
    <div className="row parent-container d-flex justify-content-center align-items-center">
      <div className="col-6 card p-5 m-5">
        <h2>My Account</h2>
        <img
          src={MyImage}
          className="rounded-circle mx-auto d-block mb-3"
          alt="ProfileImage"
          height={200}
          width={200}
        ></img>
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
          <input
            className="btn btn-primary btn-lg w-100 mt-2"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
