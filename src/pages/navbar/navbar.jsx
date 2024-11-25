import logo1 from "../../assets/images/Frame 2 1 (1).png";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="Nav-bar">
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <img src={logo1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
