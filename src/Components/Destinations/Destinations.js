import React from "react";
import "./Destinations.css";
import { PhotoAlbum } from "react-photo-album";

function Destinations() {
  const photos = [
    {
        src: "../../../assets/g1.jpg",
        width: 400,
        height: 300
    },
    {
      src: "../../../assets/g2.jpg",
        width: 400,
        height: 300
    },
    {
      src: "../../../assets/g3.jpg",
      width: 400,
      height: 300
  },
  {
    src: "../../../assets/r2.jpg",
      width: 400,
      height: 300
  },
  {
    src: "../../../assets/t1.jpg",
    width: 400,
    height: 300
},
    {
      src: "../../../assets/g2.jpg",
        width: 400,
        height: 300
    },
    {
      src: "../../../assets/g3.jpg",
      width: 400,
      height: 300
  },
  {
    src: "../../../assets/r2.jpg",
      width: 400,
      height: 300
  },
  {
    src: "../../../assets/t1.jpg",
    width: 400,
    height: 300
},


];
  return (
    <main className="destinations">
      <section className="destinations-topsection">
        <h1>Top Destinations</h1>
        <p>Lists of Hotels by Top Destinations</p>
      </section>
      <section className="destinations-bottomsection">
        <PhotoAlbum layout="columns" photos={photos}/>
      </section>
    </main>
  );
}
export default Destinations;
