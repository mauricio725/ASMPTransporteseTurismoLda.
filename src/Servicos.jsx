import Rodape from "./Rodape";

export default function Servicos() {
  return (
    <>
      <section className="servicos">
        <h1>Os Nossos Serviços</h1>

        <ul className="servicos-grid">
          <li className="servico-card">
            <h3>Transporte rodoviário de passageiros</h3>
            <p>Serviço seguro e confortável em veículos ligeiros.</p>
          </li>

          <li className="servico-card">
            <h3>Assistência a veículos na estrada</h3>
            <p>Apoio rápido e eficiente em situações de avaria.</p>
          </li>

          <li className="servico-card">
            <h3>Transporte rodoviário de mercadorias</h3>
            <p>Entrega fiável para empresas e particulares.</p>
          </li>

          <li className="servico-card">
            <h3>Atividades de animação turística</h3>
            <p>Passeios e experiências personalizadas.</p>
          </li>

          <li className="servico-card">
            <h3>Alojamento local</h3>
            <p>Hospedagem confortável e acolhedora.</p>
          </li>

          <li className="servico-card">
            <h3>Serviços de limpeza de edifícios</h3>
            <p>Limpeza profissional para casas e empresas.</p>
          </li>

          <li className="servico-card">
            <h3>Gestão e comércio florestal</h3>
            <p>Serviços especializados para exploração florestal.</p>
          </li>

          <li className="servico-card">
            <h3>Comércio e reparação de veículos automóveis</h3>
            <p>Venda, manutenção e reparação.</p>
          </li>

          <li className="servico-card">
            <h3>Aluguer de máquinas e equipamentos</h3>
            <p>Equipamentos para obras e serviços gerais.</p>
          </li>
        </ul>
      </section>

      <Rodape />
    </>
  );
}


