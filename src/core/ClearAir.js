import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";
import "../styles.css";

const CleanAir = () => {
  return (
    <div>
      {/* <Menu /> */}
      <h2 className="mt-4 mb-4 text-center">Ren Luft</h2>
      <p className="text-center">
        Vi människor vistas 90% inomhus och luften inomhus är oftast mer komplex
        och det är 50 gånger farligare att träffas av en luftförorening inomhus
        än utomhus, WHO 2019 ..et al. vilket säger sig självt med alla
        kemikalier och ämnen som finns runt oss inne. <br /> Ljus, spisar,
        flamskyddsmedel, mögelmedel , radon etc gör inomhusmiljön komplex och
        ibland skadlig. Vi tillför frisk luft och till viss del renad utifrån
        som skall späda ut gaser samt ämnen inomhus men vi får då oftast in fler
        partiklar från uteluften in i våra hem. <br /> <br /> Ventilation med
        filter renar oftast ca 60% av partiklar utifrån. Operationssalar,
        kärnkraftverk etc skyddas genom filtrering då oftast av HEPA filter som
        betyder att filtret tar virus eller bakterier i ett filtermedia som är
        finmaskat. Klassade filter gör man enligt en standard som heter EN 1822.
        <br />
        <br />
        <div className="container-flud">
          <img
            className="img-landscape img-fluid"
            alt="landscape"
            src={process.env.PUBLIC_URL + "/assets/landscape.jpg"}
          />
        </div>
        <br />
        <br />
        Lika som att man sätter på sig ett säkerhetsbälte i bilen kan man med
        säkerhet omge sig med ren luft om man använder en Luftrenare i hemmet.
        <br /> Ren luft ger oss människor bättre syreupptagningsförmåga, lägre
        blodtryck, mindre effekter av allergier och säkrar upp så att vi inte
        inandas ämnen och partiklar som är skadliga. <br /> <br /> Kan vi ge oss
        förmånen att andas ren luft i våra hem på ett enkelt sätt, ja det kan vi
        genom att använda luftens säkerhetsbälte = Luftrenare med bra filter!
        Luften är vårt viktigaste livsmedel.. och vi andas 15 kg per dag,
        dricker 3 kg och äter 1 kg. <br /> Så att veta hur allergier, astma samt
        annan påverkan på oss människor minskar radikalt med att använda
        Luftrenare förstår vi om vi tänker efter. Unna dig ren luft i hemmet.
        <br /> För mer info, läs mer om ren luft på
        <Link to={"https://iaq.se/"}> IAQ.se</Link>
      </p>
      <Footer />
    </div>
  );
};

export default CleanAir;
