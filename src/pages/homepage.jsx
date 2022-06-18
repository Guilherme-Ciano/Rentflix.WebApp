import React from "react";
import image from "../assets/hand.svg";
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
          </div>
        </section>

        <section className="catalogue-section">
          <div className="image">
            <img src={Search} alt="hand" />
          </div>

          <div className="textArea">
            <h1 className="title">Busca simplificada</h1>
            <p className="description">
              Ta com dúvida do que assistir? pesquise por gênero, título ou
              simplesmente deixe nossa função "Descobrir" te surpreender.
            </p>
          </div>
        </section>

        <section className="benefits-section">
          <div className="container">
            <Features />
          </div>
        </section>
      </Navbar>
    </>
  );
}
