import React, { useState, useEffect } from "react";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Rodape from "./Rodape";
import taxi from "./img/imagemtaxi.jpg";

export default function Home({ setCurrentPage }) {
  // Slider
  const imagens = [taxi];
  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const seguinte = () => {
    setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  // Perguntas automáticas
  const perguntas = [
    "O que deseja saber?",
    "Precisa de transporte?",
    "Quer conhecer os nossos serviços?",
    "Deseja contactar-nos?"
  ];

  const [indexPergunta, setIndexPergunta] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexPergunta((prev) => (prev + 1) % perguntas.length);
    }, 2500);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="home">
      <section className="capa">
        <div className="capa-texto">
          <h1>Bem-vindo à ASMP Transportes e Turismo</h1>
          <p>Transporte e turismo com segurança, conforto e profissionalismo.</p>
          <p className="frase-impacto">
            A ASMP leva-o onde precisa — com segurança, conforto e estilo.
          </p>

          <div className="icones-servicos">
            <div><i className="fa-solid fa-car"></i><p>Transporte</p></div>
            <div><i className="fa-solid fa-suitcase"></i><p>Turismo</p></div>
            <div><i className="fa-solid fa-home"></i><p>Alojamento</p></div>
          </div>

          <button className="btn-reserva" onClick={() => setCurrentPage("reservas")}>
            Reservar Transporte
          </button>
        </div>

        <div className="caixa-slider">
          <button className="seta-slider seta-esq" onClick={anterior}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <img src={imagens[index]} alt="ASMP Transporte" className="slider-img" />

          <button className="seta-slider seta-dir" onClick={seguinte}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* Caixa de pergunta automática */}
      <div className="caixa-pergunta">
        <div className="pergunta-slider">
          <p>{perguntas[indexPergunta]}</p>
        </div>

        <div className="botoes-pergunta">
          <button onClick={() => setCurrentPage("servicos")}>Serviços</button>
          <button onClick={() => setCurrentPage("sobre")}>Sobre Nós</button>
          <button onClick={() => setCurrentPage("contactos")}>Contactos</button>
        </div>
      </div>

      <Rodape />
    </div>
  );
}
