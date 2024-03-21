// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = ["Francisco", "Marti"];

  const handleRandomSelect = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    setSelectedPerson(people[randomIndex]);
  };

  return (
    <div className="App">
      <div className="girasol">
        <span role="img" aria-label="girasol" style={{ fontSize: "90px" }}>
          🌻
        </span>
        <p className="estilo" >Feliz otoño, tu flor amarilla corazón !!!</p>
      </div>
      <h1>¿Quién elige la película?</h1>
      <button onClick={handleRandomSelect}>Seleccionar aleatoriamente</button>
      {selectedPerson && (
        <div className="selected-person">
          <p>Tiene que elegir: {selectedPerson}</p>
        </div>
      )}
      <div className="streaming-buttons">
        <a
          href="https://www.netflix.com/browse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            alt="Netflix"
          />
        </a>
        <a
          href="https://play.max.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://brandemia.org/contenido/subidas/2023/04/logo-max-no-hbo-1200x670.jpg"
            alt="HBO Max"
          />
        </a>
        <a
          href="https://www.starplus.com/es-419/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://media.telebajocero.com/p/bdee9b9dd49b8fe87156430f93f2983a/adjuntos/225/imagenes/000/871/0000871409/1200x675/smart/star-el-servicio-streaming-que-busca-superar-netflix.jpg"
            alt="StarPlus"
          />
        </a>
        <a
          href="https://cuevana3.ch/estrenos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://media.ambito.com/p/f5d8f8040c1ccf2c1028d2f7ba9bcb30/adjuntos/239/imagenes/040/844/0040844573/cuevana-3.jpg"
            alt="Cuevana"
          />
        </a>
      </div>
      <footer>
        Para que no peliemos quien decide la película, amorcito
        <span role="img" aria-label="corazón" style={{ color: "#ff6b6b" }}>
          ❤️
        </span>
      </footer>
    </div>
  );
}

export default App;
