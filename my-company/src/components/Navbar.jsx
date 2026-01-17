import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between", // ✅ REQUIRED
        alignItems: "center",
        backgroundColor: "#222",
        padding: "10px 20px",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        Home
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/about">
        About
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/services">
        Services
      </Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
