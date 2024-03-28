import "./style.css";
import logo from "@img/react.svg";

function header(){
    return <header>
    <div className="container">
      <nav className="nav">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="list">
          <li className="item">
            <a href="#" className="link">
              Home
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              About
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              Service
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
            </header>
}

export default header;