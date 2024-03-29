import { useState } from "react";
import LocationView from "../../components/LocationView";
import "./style.scss";
import KhaltiPage from "../KhaltiPage";
import CashLogo from "../../assets/images/cash.jpg";

const AppointmentPage = () => {
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const [selectedPaymentType, setPaymentType] = useState("");
  const onSubmitHandler = () => {};
  const handleOnChange = (event) => {
    setAppointmentDetail({
      ...appointmentDetail,
      [event.target.name]: event.target.value,
    });
  };

  console.log(selectedPaymentType);

  return (
    <LocationView>
      <div className="card appointment-card">
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
                aria-label="Select Services"
                onChange={handleOnChange}
                placeholder="Select which service you want to book"
              >
                <option selected>Select which service you want to book</option>
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
            <label className="form-label">Select Payment Method: </label>
            <div className="mb-3 d-flex">
              <KhaltiPage
                onClickSet={() => setPaymentType("khalti")}
                isActive={selectedPaymentType === "khalti"}
              />
              <div
                className={`form-check ml-5 ${selectedPaymentType === "cash" && "active"}`}
                role="presentation"
                onClick={() => setPaymentType("cash")}
              >
                <img src={CashLogo} height="60" />
                <span className="ml-5">Cash on Payment</span>
              </div>
            </div>
            <button className="btn btn-primary btn-lg mt-2" type="submit">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </LocationView>
  );
};

export default AppointmentPage;
