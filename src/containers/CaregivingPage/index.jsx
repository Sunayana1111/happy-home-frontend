import LabImg1 from "../../assets/images/lab4.jpg";
import LabImg2 from "../../assets/images/lab2.jpg";
import LabImg3 from "../../assets/images/lab8.jpg";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getAllCareGivers } from "../../services/http-request";

const CaregivingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getAllCareGivers()
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data) {
            toast.success("get caregivers Successfully!");
          } else {
            toast.error(JSON.stringify(data));
          }
        });
    } catch (error) {
      console.error("Error:", error);
      toast.error(JSON.stringify(error));
    }
  }, []);

  const redirectToBookAppointment = () => {
    navigate(`/caregiving/book-appointment`);
  };

  return (
    <>
      <div className="container parent-container">
        <div className="row justify-content-md-center">
          <div className="col-12">
            <h1 className="text-center fw-bold text-uppercase d-flex justify-content-center">
              <span className="pr-5">Caregivers</span>
              {/* <button
                type="button"
                className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5"
                data-bs-toggle="modal"
                data-bs-target="#addNewCareGiver"
              >
                <i className="bi bi-person-plus pr-5"></i>
                Add New Caregiver
              </button> */}
            </h1>
            <p className="display-5 mb-4 mb-md-5 text-center">
              {" "}
              Our Caregivers play an indispensable role in enriching the lives
              of those we serve.
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-0 gx-xxl-5 mb-5">
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src={LabImg1}
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="5"
                      data-bsb-star-off="0"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Dr. Vikram Singh, Ph.D., is a distinguished medical
                      professional with over 15 years of experience, having
                      obtained her doctoral degree from renowned medical
                      institutions including Johns Hopkins University. Dr.
                      Vikrams illustrious career spans a diverse range of
                      medical specialties, showcasing her exceptional breadth of
                      knowledge and expertise.
                    </blockquote>
                    <h4 className="mb-2">Dr. Vikram Singh</h4>
                    <h5 className="fs-6 text-secondary mb-0">
                      Orthopedic Surgeons
                    </h5>
                  </figcaption>
                  <button
                    type="button"
                    className="btn btn-lg btn-success mt-5"
                    onClick={redirectToBookAppointment}
                  >
                    <i className="bi bi-person-plus pr-5"></i>
                    Book Appointment
                  </button>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src={LabImg2}
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="4"
                      data-bsb-star-off="1"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Dr. Sunil Shrestha, Ph.D., is an experienced medical
                      professional who obtained his doctoral degree from Harvard
                      medical school. He has worked for more than 10 years in
                      various hospitals and possesses brilliant medical
                      knowledge and a penchant for modern research in the
                      medical field. Dr. Shrestha has established himself as a
                      compassionate and dedicated healer.
                    </blockquote>
                    <h4 className="mb-2">Dr. Sunil Shrestha</h4>
                    <h5 className="fs-6 text-secondary mb-0">Neurologists</h5>
                  </figcaption>
                  <button type="button" className="btn btn-lg btn-success mt-5">
                    <i className="bi bi-person-plus pr-5"></i>
                    Book Appointment
                  </button>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src={LabImg3}
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="5"
                      data-bsb-star-off="0"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Dr. Samantha Shah is a dedicated and compassionate medical
                      professional with a wealth of experience in providing
                      exceptional patient care. With a strong background in
                      internal medicine and a passion for improving healthcare
                      outcomes. She is known for her high ethical standards and
                      service orientation in hospitals. service orientation in
                      hospitals.
                    </blockquote>
                    <h4 className="mb-2">Dr. Samantha Shah</h4>
                    <h5 className="fs-6 text-secondary mb-0">
                      Primary Care Physician (PCPs)
                    </h5>
                  </figcaption>
                  <button type="button" className="btn btn-lg btn-success mt-5">
                    <i className="bi bi-person-plus pr-5"></i>
                    Book Appointment
                  </button>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4 gy-md-0 gx-xxl-5 mb-5">
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src={LabImg1}
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="5"
                      data-bsb-star-off="0"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Dr. Vikram Singh, Ph.D., is a distinguished medical
                      professional with over 15 years of experience, having
                      obtained her doctoral degree from renowned medical
                      institutions including Johns Hopkins University. Dr.
                      Vikrams illustrious career spans a diverse range of
                      medical specialties, showcasing her exceptional breadth of
                      knowledge and expertise.
                    </blockquote>
                    <h4 className="mb-2">Dr. Vikram Singh</h4>
                    <h5 className="fs-6 text-secondary mb-0">
                      Orthopedic Surgeons
                    </h5>
                  </figcaption>
                  <button type="button" className="btn btn-lg btn-success mt-5">
                    <i className="bi bi-person-plus pr-5"></i>
                    Book Appointment
                  </button>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src={LabImg2}
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="4"
                      data-bsb-star-off="1"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Dr. Sunil Shrestha, Ph.D., is an experienced medical
                      professional who obtained his doctoral degree from Harvard
                      medical school. He has worked for more than 10 years in
                      various hospitals and possesses brilliant medical
                      knowledge and a penchant for modern research in the
                      medical field. Dr. Shrestha has established himself as a
                      compassionate and dedicated healer.
                    </blockquote>
                    <h4 className="mb-2">Dr. Sunil Shrestha</h4>
                    <h5 className="fs-6 text-secondary mb-0">Neurologists</h5>
                  </figcaption>
                  <button type="button" className="btn btn-lg btn-success mt-5">
                    <i className="bi bi-person-plus pr-5"></i>
                    Book Appointment
                  </button>
                </figure>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src={LabImg3}
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="5"
                      data-bsb-star-off="0"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Dr. Samantha Shah is a dedicated and compassionate medical
                      professional with a wealth of experience in providing
                      exceptional patient care. With a strong background in
                      internal medicine and a passion for improving healthcare
                      outcomes. She is known for her high ethical standards and
                      service orientation in hospitals.service orientation in
                      hospitals.
                    </blockquote>
                    <h4 className="mb-2">Dr. Samantha Shah</h4>
                    <h5 className="fs-6 text-secondary mb-0">
                      Primary Care Physician (PCPs)
                    </h5>
                  </figcaption>
                  <button type="button" className="btn btn-lg btn-success mt-5">
                    <i className="bi bi-person-plus pr-5"></i>
                    Book Appointment
                  </button>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaregivingPage;
