import Footer from './Footer.jsx'
import Header from "./Header.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <div
        style={{
          backgroundColor: 'whitesmoke',
          padding: "10px",

        }}
      >
        <nav>
          
            <div>
              <Link
                to="/home"
                style={{
                  marginRight: "20px",
                  color: "#333",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <Link
                to="/chat"
                style={{
                   color: "#333",
                  textDecoration: "none",
                }}
              >
                Chat
              </Link>
            </div>
      
        </nav>
      </div>
      <Header />
      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "20px",
          color: 'grey',
          width: '100%'
          
        }}
      >
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

