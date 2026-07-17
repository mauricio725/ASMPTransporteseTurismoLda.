import React, { useState, useEffect } from "react";
import Cabecalho from "./Cabecalho";
import Home from "./Home";
import Servicos from "./Servicos.jsx";
import Contactos from "./Contactos";
import SobreNos from "./SobreNos.jsx";
import Loader from "./Loader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./css/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showLoader, setShowLoader] = useState(true);

  // Loader inicial (quando abre o site)
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Loader sempre que muda de página
  useEffect(() => {
    setShowLoader(true);
    const timer = setTimeout(() => setShowLoader(false), 1200);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "servicos":
        return <Servicos />;
      case "contactos":
        return <Contactos />;
      case "sobre":
        return <SobreNos setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

 return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Cabecalho setCurrentPage={setCurrentPage} />
          <main>{renderPage()}</main>
        </>
      )}
      <Analytics />
      <SpeedInsights /> 
    </div>
  );
}

export default App;
