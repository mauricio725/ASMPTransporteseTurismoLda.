import Rodape from "./Rodape";

export default function SobreNos({ setCurrentPage }) {
  return (
    <>
      <section className="sobre-wrapper">
        <div className="sobre-card">
          <h1 className="sobre-titulo">
            Sobre <span>Nós</span>
          </h1>

          <p className="sobre-texto">
            A <strong>ASMP Transportes e Turismo</strong> é uma empresa dedicada ao
            transporte de passageiros, oferecendo soluções seguras, confortáveis e
            adaptadas às necessidades de cada cliente. Com experiência no setor e
            um compromisso constante com a qualidade, garantimos um serviço
            profissional, pontual e de confiança.
          </p>

          <h2 className="sobre-subtitulo">Especialidades</h2>

          <ul className="sobre-lista">
            <li>Transporte Escolar</li>
            <li>Transporte Ocupacional</li>
            <li>Transporte de Turismo</li>
            <li>Serviços Personalizados para Grupos e Eventos</li>
          </ul>

          <p className="sobre-texto">
            O nosso objetivo é proporcionar viagens tranquilas, seguras e
            eficientes, sempre com foco no bem‑estar dos passageiros.
          </p>

          <button
            className="btn-vermelho"
            onClick={() => setCurrentPage("contactos")}
          >
            Contactar Empresa
          </button>
        </div>
      </section>

      <Rodape />
    </>
  );
}
