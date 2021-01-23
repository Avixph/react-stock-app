import "../css/Header.css";
import logo from "../images/STQS_Logo_SM.svg";

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">
        <img src={logo} alt="STQS" />
      </h1>
    </header>
  );
}

export default Header;
