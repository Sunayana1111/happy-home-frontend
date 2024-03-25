import HomeCareLogo from "../../assets/images/home.png";
import './style.scss'

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid main-header-nav overflow-auto">
            <a className="navbar-brand main-logo" href="#">
              <img src={HomeCareLogo} alt="Happy Home" width="88" height="88" className="d-inline-block align-text-top" />
            </a>
            <a className="navbar-brand homecare-name">
              Happy Home
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <i className="bi bi-house-door"></i>
                    <span className="p-2">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/caregiving">
                    <i className="bi bi-person-wheelchair"></i>
                    <span className="p-2">Caregiving</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/lab-services">
                    <i className="bi bi-hospital"></i>
                    <span className="p-2">Lab Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    <i className="bi bi-bookmark-heart"></i>
                    <span className="p-2">About Us</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/help">
                    <i className="bi bi-patch-question"></i>
                    <span className="p-2">Help</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    <i className="bi bi-person-lock"></i>
                    <span className="p-2">Account</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
