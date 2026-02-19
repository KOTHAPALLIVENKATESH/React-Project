import "./navbar.css";
import logo from '../assets/logo.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Left Side */}
      <div className="logo">
        <img src={logo} alt="TripGo Logo" className="logo-img" />
        <span className="logo-text">TravelPartner</span>
      </div>

      {/* Right Side */}
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {/* Auth Buttons */}
      {/* <div className="auth-buttons">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </div> */}

      
      <div style={{ padding: 20, background: "#f1f5f9" }}>
      <Link to="/signin">Sign In</Link>

      <Link to="/signup" style={{ marginLeft: 20 }}>
        Sign Up
      </Link>
    </div>
    </nav>
  );
};

export default Navbar;