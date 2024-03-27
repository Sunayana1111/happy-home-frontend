import LabImg1 from "../../assets/images/lab4.jpg";
import LabImg2 from "../../assets/images/lab5.jpg";
import LabImg3 from "../../assets/images/lab7.jpg";
import LabImg4 from "../../assets/images/lab6.jpg";
// import { useEffect } from "react";
// import { getCookie } from "../../context/setCookie";
// import { getAllLabServices } from "../../services/http-request";
// import { toast } from "react-toastify";

const LabServicesPage = () => {
  // const token = getCookie("token");

  // useEffect(() => {
  //   if (token) {
  //     try {
  //       getAllLabServices()
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           if (data) {
  //             toast.success("get lab services Successfully!");
  //           } else {
  //             toast.error(JSON.stringify(data));
  //           }
  //         });
  //     } catch (error) {
  //       console.error("Error:", error);
  //       toast.error(JSON.stringify(error));
  //     }
  //   }
  // }, []);

  return (
    <>
      <div className="container parent-container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center fw-bold text-uppercase d-flex justify-content-center">
              <span className="pr-5">Lab Services</span>
            </h1>
            <h2 className="display-5 mb-4 mb-md-5 text-center">
              Our journey began with a dream of redefining how the world
              perceives medical Assistance.
            </h2>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden mb-5">
        <div className="row gy-4 gy-lg-0">
          <div className="col-12 col-lg-6 mb-5">
            <article>
              <div className="card border-0">
                <img
                  className="card-img-top img-fluid m-0"
                  loading="lazy"
                  src={LabImg1}
                  height={500}
                  alt=""
                />
                <div className="card-body border bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Vision
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    From sleek modernism to timeless elegance, we infuse every
                    creation with a touch of our artistic ingenuity. As a design
                    agency, great design can shape perceptions, inspire action,
                    and leave an indelible mark on the world.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-lg-6 mb-5">
            <article>
              <div className="card border-0">
                <img
                  className="card-img-top img-fluid m-0"
                  loading="lazy"
                  src={LabImg2}
                  height={500}
                  alt=""
                />
                <div className="card-body border bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Approach
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    Welcome to our design agency, where creativity knows no
                    bounds and innovation takes center stage. We are a team of
                    dedicated designers, strategists, and visionaries with a
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-lg-6">
            <article>
              <div className="card border-0">
                <img
                  className="card-img-top img-fluid m-0"
                  loading="lazy"
                  src={LabImg3}
                  height={500}
                  alt=""
                />
                <div className="card-body border bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Approach
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    Welcome to our design agency, where creativity knows no
                    bounds and innovation takes center stage. We are a team of
                    dedicated designers, strategists, and visionaries with a
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="col-12 col-lg-6">
            <article>
              <div className="card border-0">
                <img
                  className="card-img-top img-fluid m-0"
                  loading="lazy"
                  src={LabImg4}
                  height={500}
                  alt=""
                />
                <div className="card-body border bg-white p-4">
                  <div className="entry-header mb-3">
                    <h2 className="card-title entry-title h4 mb-0">
                      <a className="link-dark text-decoration-none" href="#!">
                        Our Approach
                      </a>
                    </h2>
                  </div>
                  <p className="card-text entry-summary text-secondary mb-3">
                    Welcome to our design agency, where creativity knows no
                    bounds and innovation takes center stage. We are a team of
                    dedicated designers, strategists, and visionaries with a
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabServicesPage;
