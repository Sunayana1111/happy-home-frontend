import HomeCareLogo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={HomeCareLogo} alt="Bootstrap" width="70" height="70" />
          </a>
          <a class="navbar-brand" href="#">
            Happy Home
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Caregiving
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Lab Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
