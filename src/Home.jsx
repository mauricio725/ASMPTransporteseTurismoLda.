import React from "react";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Rodape from "./Rodape";

export default function Home() {
  return (
    <div className="home">
      <div className="home-capa">
        <h1>Bem-vindo à ASMP Transportes e Turismo</h1>
        <p>Transporte e turismo com segurança, conforto e profissionalismo.</p>

        <div className="home-imagens">
          <div className="img-placeholder">Arrasta aqui as tuas imagens</div>
          <div className="img-placeholder">Arrasta aqui as tuas imagens</div>
          <div className="img-placeholder">Arrasta aqui as tuas imagens</div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}


