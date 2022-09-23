import React from "react";
import "./TourAids.css";

function TourAids() {
  return (
    <div className="tour-container">
      <section className="tour-leftsection">
        <img src="../../assets/t11.jpg" alt="" />
        <div className="leftsection-container bothsection-container">
          <div className="bothsection-mainheading">
            <section className="bothsection-heading">
              <span>the indias</span>
              <h2>Cartinagina</h2>
            </section>
            <section className="bothsection-pricing">
              <span>Starts from</span>
              <h2>586$</h2>
            </section>
          </div>
          <p>Stay 4 days 3 nights from <span>$548 per passenger</span> Lower air fare and tour prices guaranteed!!!!</p>
          <button>Booking Now</button>
        </div>
      </section>
      <section className="tour-rightsection">
        <img src="../../assets/t2.jpg" alt="" />
        <div className="right-container bothsection-container">
          <div className="bothsection-mainheading">
            <section className="bothsection-heading">
              <span>the indias</span>
              <h2>Cartinagina</h2>
            </section>
            <section className="bothsection-pricing">
              <span>Starts from</span>
              <h2>586$</h2>
            </section>
          </div>
          <p>Stay 4 days 3 nights from <span>$548 per passenger</span> Lower air fare and tour prices guaranteed!!!!</p>
          <button>Booking Now</button>
        </div>
      </section>
    </div>
  );
}
export default TourAids;
