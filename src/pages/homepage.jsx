import React, { useEffect } from "react";
import "../styles/frontpage.scss";
import Navbar from "../components/navbar";
import Features from "../components/feature";
import Search from "../assets/search.png";

export default function Homepage() {
  return (
    <>
      <Navbar>
        <section className="frontpage-section">
          <div className="headerTitle">
            <h1 className="title">Que tal assistir algo hoje?</h1>
            <h3 className="description">
              Pra qualquer hora, qualquer momento e qualquer gosto
            </h3>
          </div>
        </section>
      </Navbar>
    </>
  );
}
