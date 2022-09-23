import React from "react";
import "./Home.css";
import Hotel from "./Components/Hotels";

import { FaHotel } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { SiYourtraveldottv } from "react-icons/si";
function Home(props) {
  return (
    <div className="home">
      <div className="home-container">
        <section className="home-headings">
          <div className="home-headings-data">
            <FaHotel className="home-heading-icons" />
            <span>HOTELS</span>
          </div>
          <div className="home-headings-data">
            <ImHome className="home-heading-icons" />
            <span>HOMESTAY</span>
          </div>
          <div className="home-headings-data">
            <SiYourtraveldottv className="home-heading-icons" />
            <span>TOUR & TRAVELS</span>
          </div>
        </section>
        <section className="home-details">
          <Hotel />
        </section>
      </div>
    </div>
  );
}

export default Home;
