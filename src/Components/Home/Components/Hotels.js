import React from "react";

function Hotels(props) {
  return (
    <div className="hotels">
      <section>
        <p className="hotels-heading">Search and Save on Hotels</p>
      </section>
      <section>
        <div className="guests-location">
          <span>Where are your going?</span>
          <input
            type="text"
            placeholder="City,Airport Point of Interest or Pak Zone"
          />
        </div>
        <div className="guests-rooms">
          <span>Rooms</span>
          <input type="text" placeholder="Total rooms" />
        </div>
      </section>
      <section>
        <div className="guests-location hotel-check">
          <span>Check-in</span>
          <input type="text" placeholder="Aug 14,2022" />
        </div>
        <div className="guests-location hotel-check">
          <span>Check-out</span>
          <input type="text" placeholder="Aug 18,2022" />
        </div>
        <div className="guests-rooms">
          <span>Guests</span>
          <input type="text" placeholder="Adult" />
        </div>
      </section>
      <section>
        {/* This div has been hidden, it's usage is not working but for UI I have made as it will use in CSS */}
        <div className="guests-location hotel-hidden">
          <span>Where are your going?</span>
          <input
            type="text"
            placeholder="City,Airport Point of Interest or Pak Zone"
          />
        </div>
        <div className="guests-rooms">
          <input type="text" placeholder="Child" />
        </div>
      </section>
      <section>
        <div className="guests-location hotels-searchBtn">
          <input type="button" value="Search for Hotels" />
        </div>
        <div className="guests-rooms">
          <input type="text" placeholder="Infant" />
        </div>
      </section>
    </div>
  );
}

export default Hotels;
