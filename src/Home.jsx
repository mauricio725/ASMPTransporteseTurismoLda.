import React, { useState } from "react";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Rodape from "./Rodape";
import taxi from "./img/imagemtaxi.jpg";

export default function Home() {
  const imagens = [taxi, "/imagem2.jpg", "/imagem3.jpg"];
  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const seguinte = () => {
    setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home">
      <div className="home-capa">
        <h1>Bem-vindo à ASMP Transportes e Turismo</h1>
        <p>Transporte e turismo com segurança, conforto e profissionalismo.</p>

        <div className="slider">
          <button className="seta seta-esquerda" onClick={anterior}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <img src={imagens[index]} alt="Imagem ASMP" className="slider-img" />

          <button className="seta seta-direita" onClick={seguinte}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
