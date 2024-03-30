/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import LocationView from "../../components/LocationView";
import "./style.scss";
import CashLogo from "../../assets/images/cash.jpg";
import KhaltiLogo from "../../assets/images/khalti1.jpg";

import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../utils/setCookie";
import {
  bookAppointment,
  initiateKhaltiPayment,
  verifyKhaltiPayment,
} from "../../services/http-request";
import { toast } from "react-toastify";

const SERVICE_TYPES = [
  {
    name: "Lab Services",
    value: "lab-services",
  },
  {
    name: "Caregiving",
    value: "caregiving",
  },
];

const AppointmentPage = ({ page }) => {
  const params = useParams();
  const token = getCookie("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const [selectedPaymentType, setPaymentType] = useState("");
  const initialState = {
    fullname: "",
    contact: "",
    caregiver: "",
    service: "",
    start_date: "",
    end_date: "",
    paymentType: selectedPaymentType,
  };
  console.log(initialState, "hello");

  const [appointmentDetail, setAppointmentDetail] = useState({
    caregiver: "",
    service: "",
    start_date: "",
    end_date: "",
  });
  const [defaultAppointment, setDefaultAppointment] = useState({
    title: "Caregiving",
    service: "caregiving",
    detail: {},
  });

  const intializKhaltiWeb = () => {
    let config = {
      // replace this key with yours
      publicKey: "test_public_key_f1fe71fff3ad4f50aaf6ee0f507546b2",
      productIdentity: appointmentDetail.caregiver || "testing",
      productName: appointmentDetail.service || "testing",
      productUrl: `http://localhost:3000/lab-services/${params.uuid}/book-appointment`,
      eventHandler: {
        onSuccess(payload) {
          // hit merchant api for initiating verfication
          console.log(payload);
          try {
            verifyKhaltiPayment(payload)
              .then(function (res) {
                return res.json();
              })
              .then(function (data) {
                if (data) {
                  toast.success(
                    "Your booking using Khalti Payment is Successful",
                  );
                } else {
                  toast.error(JSON.stringify(data));
                }
              });
          } catch (error) {
            console.error("Error:", error);
            toast.error(JSON.stringify(error));
          }
        },
        // onError handler is optional
        onError(error) {
          // handle errors
          console.log(error);
        },
        onClose() {
          console.log("widget is closing");
        },
      },
      paymentPreference: ["KHALTI"],
    };
    let checkout = new KhaltiCheckout(config);
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
  };

  const apiCallForKhalti = (appointmentBody) => {
    try {
      initiateKhaltiPayment(appointmentBody)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data) {
            intializKhaltiWeb();
          } else {
            toast.error(JSON.stringify(data));
          }
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error(JSON.stringify(error));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      bookAppointment(appointmentDetail)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data.appointment) {
            if (selectedPaymentType === "khalti") {
              apiCallForKhalti({ appointment: data.appointment });
            } else {
              toast.success(
                "Your booking is successful. Hope you love our service.",
              );
            }
          } else {
            toast.error(JSON.stringify(data));
          }
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error(JSON.stringify(error));
    }
  };
  const handleOnChange = (event) => {
    setAppointmentDetail({
      ...appointmentDetail,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (page) {
      const bookingDetail = localStorage.getItem("book-detail");
      setDefaultAppointment({
        title: page,
        service: page.toLowerCase().replace(/\s/g, ""),
        detail: JSON.parse(bookingDetail),
      });
    }
    if (params) {
      setAppointmentDetail({ ...appointmentDetail, caregiver: params.uuid });
    }
  }, []);

  return (
    <LocationView>
      <div className="card appointment-card">
        <div className="card-body">
          <h1 className="card-title">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/caregiving">{defaultAppointment.title}</a>
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
            {/* <div className="mb-3">
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
            </div> */}
            <div className="mb-3">
              <label className="form-label">Services Type</label>
              <select
                className="form-select form-select-lg"
                name="service"
                aria-label="Select Services"
                disabled
                onChange={handleOnChange}
                value={defaultAppointment.service}
                placeholder="Select which service you want to book"
              >
                {SERVICE_TYPES.map((eachService, index) => (
                  <option value={eachService.value} key={index}>
                    {eachService.name} -{" "}
                    {defaultAppointment?.detail?.user?.first_name}{" "}
                    {defaultAppointment?.detail?.user?.last_name} -{" "}
                    {defaultAppointment?.detail?.speciality}
                  </option>
                ))}
              </select>
            </div>
            <div className="row mb-3">
              <div
                className={`${defaultAppointment.service === "caregiving" ? "col-6 p-0" : "col-12 p-0"}`}
              >
                <label className="form-label">Appointment Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  className="form-control form-control-lg"
                  min={new Date().toISOString().split("T")[0]}
                  id="date"
                  onChange={handleOnChange}
                  placeholder="Enter Your Date"
                />
              </div>
              {defaultAppointment.service === "caregiving" ? (
                <div className="col-6">
                  <label className="form-label">Appointment End Date</label>
                  <input
                    type="date"
                    name="end_date"
                    className="form-control form-control-lg"
                    min={new Date().toISOString().split("T")[0]}
                    id="date"
                    onChange={handleOnChange}
                    placeholder="Enter Your Date"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <label className="form-label">Select Payment Method: </label>
            <div className="mb-3 d-flex">
              <div
                className={`form-check ml-5 ${selectedPaymentType === "khalti" && "active"}`}
                role="presentation"
                onClick={() => setPaymentType("khalti")}
              >
                <img src={KhaltiLogo} height="60" />

                <span className="ml-5">Pay with Khalti</span>
              </div>
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
