import React from "react";
import "./Scopri.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const Scopri = () => {
  return (
    <>
      <Container className="scopri-container">
        <Row>
          <Col>
            <motion.div
              className="scopri-text1"
              initial={{ x: -700, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <h2 className="mb-3">Scopri di più sui nostri servizi</h2>
              <p>
                Offriamo una vasta gamma di servizi per soddisfare tutte le tue
                esigenze.
                <br /> Siamo pronti a darti una mano con professionalità e
                rapidità.
                <br /> Che tu abbia bisogno di un <span>trasloco</span>,{" "}
                <span>lavori edili</span>, <span>giardinaggio</span>,{" "}
                <span>svuotamento cantine</span> e <span>molto altro</span>
              </p>
            </motion.div>
          </Col>
        </Row>
        <Row className="animation">
          <Col>
            <div className="road-wrapper">
              <img
                src="/img/logo1.png"
                alt="Furgoncino"
                className="van"
                aria-hidden="true"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="scopri-text2">
            <h4 className="text-end mb-4">
              Operiamo nel litorale nord di Roma e zone limitrofe.
            </h4>
            <div className="citta">
              <div className="d-flex justify-content-center gap-5">
                <h5 className="citta-anim1">CIVITAVECCHIA</h5>
                <h5 className="citta-anim2">SANTA MARINELLA</h5>
                <h5 className="citta-anim1">SANTA SEVERA</h5>
                <h5 className="citta-anim2">LADISPOLI</h5>
                <h5 className="citta-anim1">CERVETERI</h5>
                <h5 className="citta-anim2">TOLFA</h5>
                <h5 className="citta-anim1">ALLUMIERE</h5>
                <h5 className="citta-anim2">TARQUINIA</h5>
                <h5 className="citta-anim1">MOLTO ALTRO</h5>
              </div>
              <div className="text-center">
                <Button className="btn-land mt-5">Contattaci</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Scopri;
