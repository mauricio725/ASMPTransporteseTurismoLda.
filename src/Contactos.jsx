import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Rodape from "./Rodape";

export default function Contactos() {
  const form = useRef();
  const [popup, setPopup] = useState(false);

  function enviarEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_5jdo0qw",      // SERVICE ID
      "template_ksm8w1m",     // TEMPLATE ID
      form.current,
      "2hlZqC2RII7bCCavz"     // PUBLIC KEY
    )
    .then(() => {
      setPopup(true);        // abre o popup
      form.current.reset();  // limpa o formulário
    })
    .catch((error) => {
      console.error("Erro ao enviar:", error);
      alert("Ocorreu um erro ao enviar a mensagem.");
    });
  }

  return (
    <>
      <section className="contactos pagina-preta">
        <h1>Contactos</h1>

        <div className="contactos-container">

          {/* INFORMAÇÕES */}
          <div className="contactos-info card-preta">
            <h2>Informações</h2>

            <p><strong>Empresa:</strong><br />A S M P Transportes e Turismo, Lda.</p>
            <p><strong>Morada:</strong><br />Rua da Arte Xávega, 3060-693 Tocha, Cantanhede</p>
            <p><strong>Telefone:</strong><br />+351 937 917 760</p>

            <p>
              <strong>Email:</strong><br />
              <a href="mailto:asmptransporteseturismo@gmail.com">
                asmptransporteseturismo@gmail.com
              </a>
            </p>
          </div>

          {/* FORMULÁRIO */}
          <div className="contactos-form card-preta">
            <h2>Enviar Mensagem</h2>

            <form ref={form} onSubmit={enviarEmail}>
              <input type="text" name="nome" placeholder="Nome" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="mensagem" placeholder="Mensagem" rows="5" required></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>

        </div>

        {/* MAPA */}
        <div className="contactos-mapa card-preta">
          <iframe
            title="Mapa ASMP"
            src="https://www.google.com/maps?q=Rua+da+Arte+X%C3%A9vega,+3060-693+Tocha,+Cantanhede&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* POPUP DE SUCESSO */}
        {popup && (
          <div className="popup-sucesso">
            <div className="popup-conteudo">
              <button className="popup-fechar" onClick={() => setPopup(false)}>✖</button>
              <h3>Mensagem enviada!</h3>
              <p>A sua mensagem foi enviada com sucesso.</p>
            </div>
          </div>
        )}

      </section>

      <Rodape />
    </>
  );
}

