import "./Header.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "react-responsive-navbar-overlay";

import App from "../../App";



export default function Header() {
  return (
    <div className="header-container">
      <BrowserRouter>
        <Navbar
          links={[
            { text: "Home", link: "/" },
            { text: "SignIn", link: "/signin" },
            { text: "Register", link: "/register" },
            { text: "ContactUs", link: "/contact" },
          ]}
          fontColor="#000"
          backgroundColor="#fff"
          brand={<font className="nav-logo">khatTak</font>}
        />
         <Routes>
          <Route  path="/" component={<App />}/>
          <Route path="/SignIn" component={"Home"} />
          <Route path="/Register" component={"Home"} />
          <Route path="/ContactUs" component={"Home"} />
        </Routes> 
        </BrowserRouter>
    </div>
  );
}
