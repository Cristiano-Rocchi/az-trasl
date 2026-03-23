import React from "react";
import "./Landing.css";
import { Button } from "react-bootstrap";
import Scopri from "../Scopri/Scopri";

const Landing = () => {
  // 1.Landing img e testo
  // 2. Scopri di piu
  return (
    <>
      {/*-----1------- VIALE DELLA VITTORIA 6*/}
      <div className="landing-container">
        <img
          className="landing-image"
          src="/img/landing-img.webp"
          alt="Foto Furgone"
        />
        <div className="landing-text">
          <h1>
            Contattaci per un <br /> servizio rapido e professionale: <br />{" "}
            traslochi, lavori edili, giardinaggio <br /> e molto altro
          </h1>
          <div className="d-flex justify-content-center gap-5 mt-5">
            <Button className="btn-land">Contattaci</Button>
            <Button className="btn-land">Scopri di piu</Button>
          </div>
        </div>
        <h5>Traslochi da 120€</h5>
      </div>
      {/*-----2-------*/}
      <Scopri />
    </>
  );
};

export default Landing;
