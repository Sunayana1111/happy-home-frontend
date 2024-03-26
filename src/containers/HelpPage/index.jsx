const HelpPage = () => {
  return (
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center justify-content-center parent-container">
      {/* Main Content */}
      <div className=" col-8 mt-4">
        <div className="jumbotron p-3 p-md-5 rounded text-primary">
          <div className="col-12 px-0">
            <h1 className="display-4 font-italic">
              Frequently Asked Questions!
            </h1>
            <p className="lead my-3">
              Welcome to the help page. Here you can find answers to common
              questions and issues.
            </p>
          </div>
          <div className="col-12 px-0">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <strong>This is the first items accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <strong>This is the second items accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-heading4"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse4"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse4"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-heading4"
                >
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-heading5"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse5"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse5"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-heading5"
                >
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-heading6"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse6"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse6"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse6"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-heading6"
                >
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-heading7"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse7"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapse7"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse7"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-heading7"
                >
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    Its also worth noting that just about any HTML can go within
                    the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
