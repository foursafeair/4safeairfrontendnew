import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";

const About = () => {
  return (
    <div>
      {/* <Menu /> */}
      <h2 className="mt-4 mb-4 text-center">Om Oss</h2>
      <p className="text-center">
        Företaget har lång erfarenhet inom Luftrening.
        <br /> Genom mångårig utveckling av Luftreningsprodukter inom andra
        företag har man nu samlat kompetens inom filtrering och mobil luftrening
        i företaget 4Safe Air.
        <br />
        Företaget är specialister inom Luftrening och riktar sig främst till
        konsumenter samt professionella användare. 4Safe Air har egna produkter
        såväl som andra tillverkares luftreningsprodukter.
        <br /> Man utvecklar just nu en produktskala som skall täcka allt från
        den minsta luftrenare upp till exklusiva större enheter.
        <br /> <br /> Systerföretaget Lab360 arbetar gentemot företag med samma
        produktskala.
        <br />
        Läs mer på:
        <Link to={"https://lab360.se/"}> www.lab360.se </Link>
        <br /> <br />
        Klicka gärna på mejl-ikonen under för vidare frågor.
      </p>
      <Footer />
    </div>
  );
};
export default About;
