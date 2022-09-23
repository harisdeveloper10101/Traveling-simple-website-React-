import React from "react";
import "./HomeSubHeading.css"

function HomeSubHeading()
{
    return(
        <div className="home-subheading-container">
            <section className="section-left">
                <p className="section-left-heading">Come to the <span className="section-left-highlight">Tropical Paradise</span> 2015</p>
                <p className="section-left-subheading">Club royal resort Thailand, 7 night accomodation, just for $2.754 per adult</p>
                <div className="section-left-buttons">
                    <button>Learn More</button>
                    <button>Booking Now</button>
                </div>
            </section>
            <section className="section-right">
                <p className="section-left-heading"><span className="section-left-highlight">Special</span> Offer Honeymoon Destinations</p>
                <p className="section-left-subheading">Club royal resort Thailand, 7 night accomodation, just for $2.754 per adult</p>
                <div className="section-left-buttons">
                    <button>Learn More</button>
                    <button>Booking Now</button>
                </div>
            </section>
        </div>
    )
}

export default HomeSubHeading