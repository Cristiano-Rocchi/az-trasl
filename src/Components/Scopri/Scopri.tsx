import React from "react";
import "./Scopri.css";
const Scopri = () => {
  return (
    <>
      <div className="scopri-container">
        <img src="/img/scopri-img.webp" alt="" />
        <div className="scopri-text1">
          <h2>Scopri di piu sui nostri servizi</h2>
          <p>
            Offriamo una vasta gamma di servizi per soddisfare tutte le tue
            esigenze.
            <br /> Che tu abbia bisogno di un trasloco, lavori edili,
            giardinaggio, svuotamento cantine e molto altro <br /> Siamo pronti
            a darti una mano con professionalità e rapidità."
          </p>
        </div>
        <div className="scopri-text2">
          <h4>Operiamo nel litorale nord di Roma e zone limitrofe.</h4>
        </div>
        <div className="citta">
          {" "}
          <div className="d-flex justify-content-center gap-5">
            <h5>CIVITAVECCHIA</h5>
            <h5>SANTA MARINELLA</h5>
            <h5>SANTA SEVERA</h5>
            <h5>LADISPOLI</h5>
            <h5>CERVETERI</h5>
            <h5>TOLFA</h5>
            <h5>ALLUMIERE</h5>
            <h5>TARQUINIA</h5>
            <h5>E MOLTO ALTRO</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scopri;
