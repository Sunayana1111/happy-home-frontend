import { useState } from "react";
import LocationView from "../../components/LocationView";
import "./style.scss";

const AppointmentPage = () => {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const onSubmitHandler = () => {};
  const handleOnChange = (event) => {
    setAppointmentDetail({
      ...appointmentDetail,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <LocationView>
      <div className="card p-5">
        <div className="card-body">
          <h1 className="card-title">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/caregiving">Caregiving</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Book Appointment
                </li>
              </ol>
            </nav>
          </h1>
          <p className="card-text">
            Fill the information to confirm your booking for selected services.
          </p>
          <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="form-control form-control-lg"
                placeholder="Enter your fullname"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contact</label>
              <input
                type="number"
                name="contact"
                className="form-control form-control-lg"
                id="pageInput"
                onChange={handleOnChange}
                placeholder="Enter Your contact number"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Services</label>
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
            <div className="mb-3">
              <label className="form-label">Select Date</label>
              <input
                type="date"
                name="date"
                className="form-control form-control-lg"
                id="date"
                onChange={handleOnChange}
                placeholder="Enter Your Date"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Select Payment Method</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  onChange={handleOnChange}
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Khalti Payment
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  onChange={handleOnChange}
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Cash on Payment
                </label>
              </div>
            </div>
            <input
              className="btn btn-primary btn-lg w-60 mt-2"
              type="submit"
              value="Confirm Booking"
            />
          </form>
        </div>
      </div>
    </LocationView>
  );
};

export default AppointmentPage;
