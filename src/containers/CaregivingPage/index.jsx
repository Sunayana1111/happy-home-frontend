import "./style.scss";

const CaregivingPage = () => {
  return (
    <>
      <div className="container  care-giver-container">
        <div className="row justify-content-md-center">
          <div className="col-12">
            <h1 className="text-center fw-bold text-uppercase d-flex justify-content-center">
              <span className="pr-5">Caregivers</span>

              <button
                type="button"
                className="btn btn-lg btn-primary mb-3 mb-md-4 mb-xl-5"
              >
                <i className="bi bi-person-plus pr-5"></i>
                Add New Caregiver
              </button>
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
        <div className="row gy-4 gy-md-0 gx-xxl-5">
          <div className="col-12 col-md-4">
            <div className="card border-0 border-bottom border-primary shadow-sm">
              <div className="card-body p-4 p-xxl-5">
                <figure>
                  <img
                    className="img-fluid rounded rounded-circle mb-4 border border-5"
                    loading="lazy"
                    src="./assets/img/testimonial-img-1.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="5"
                      data-bsb-star-off="0"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                      euismod massa, at aliquet erat turpis quis diam. className
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos.
                    </blockquote>
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </figcaption>
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
                    src="./assets/img/testimonial-img-2.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="4"
                      data-bsb-star-off="1"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                      euismod massa, at aliquet erat turpis quis diam. className
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos.
                    </blockquote>
                    <h4 className="mb-2">Mark Smith</h4>
                    <h5 className="fs-6 text-secondary mb-0">
                      Marketing Specialist
                    </h5>
                  </figcaption>
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
                    src="./assets/img/testimonial-img-4.jpg"
                    alt=""
                  />
                  <figcaption>
                    <div
                      className="bsb-ratings text-warning mb-3"
                      data-bsb-star="5"
                      data-bsb-star-off="0"
                    ></div>
                    <blockquote className="bsb-blockquote-icon mb-4">
                      Nam ultricies, ex lacinia dapibus faucibus, sapien ipsum
                      euismod massa, at aliquet erat turpis quis diam. className
                      aptent taciti sociosqu ad litora torquent per conubia
                      nostra, per inceptos himenaeos.
                    </blockquote>
                    <h4 className="mb-2">Luke Reeves</h4>
                    <h5 className="fs-6 text-secondary mb-0">Sales Manager</h5>
                  </figcaption>
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
