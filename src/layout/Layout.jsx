import Footer from './Footer.jsx'
import Header from "./Header.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <nav style={{ backgroundColor: "#333", padding: "10px" }}>
        <Link
          to="/home"
          style={{ color: "#fff", textDecoration: "none", marginRight: "20px" }}
        >
          Home
        </Link>
        <Link to="/chat" style={{ color: "#fff", textDecoration: "none" }}>
          Chat
        </Link>
      </nav>

      <Header />
      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

