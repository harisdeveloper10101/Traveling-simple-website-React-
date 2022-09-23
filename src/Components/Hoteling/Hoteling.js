import React from "react";
import "./Hoteling.css";
import {data} from "./HotelingData";


function Hoteling() {
  return (
    <main className="Hoteling-container">
      <section className="Hoteling-heading">
        <h1>Travelers Choice of Hotels</h1>
        <p>List of Top Hotels by Travelers</p>
      </section>
      <section className="Hoteling-details">
        {data.map((item,key)=>(
            <div className="hoteling-details-container">
                <img src={item.src} alt="" className="hoteling-images"/>
                <img src="../../assets/rating.png" alt="" className="hoteling-star"/>
                <p>{item.name} <span>{item.loc}</span></p>
                <span className="hoteling-pricing"><img src="../../assets/diamond.png" alt="" className="hoteling-diamond"/> $12.00</span>
                {/* <img src="../../assets/diamong.png" alt="" className="hoteling-diamond"/> */}
            </div>
        ))}
      </section>
    </main>
  );
}
export default Hoteling;
