import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Layout;
