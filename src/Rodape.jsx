import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="social-icons">
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-github"></i></a>
      </div>
      <p>© 2026 ASMP Transportes e Turismo, Lda.</p>
    </footer>
  );
}

