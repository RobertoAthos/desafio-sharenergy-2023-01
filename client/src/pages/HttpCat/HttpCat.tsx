import React, { useState } from "react";
import "./cat.css";

export const HttpCat = () => {
  const [status, setStatus] = useState("");

  const api = `http://localhost:5000/api/httpCat/${status}`;

  return (
    <section id="cat">
      <div className="cat-text">
        <h2>
          Página de Http Cat ! Aqui, você pode ver uma imagem de um gato de
          acordo com o status HTTP que você inserir no campo abaixo.
        </h2>
      </div>
      <div className="cat-container">
        <input
          type="text"
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Coloque um status http"
        />
        <img
          src={api}
          alt={status ? "Gato não encontrado! Coloque um status válido" : ""}
        />
      </div>
    </section>
  );
};
