import {
  country,
  henrys,
  chatter,
  tech,
  poke,
  toktik,
} from '../../assets/projects';

import './Proyectos.css';

export const Proyectos = () => {
  return (
    <>
      <div id="portfolio">
        <h3 className="titulo-seccion">MIS PROYECTOS</h3>
        <div className="fila">
          <div className="proyecto">
            <div className="overlay"></div>
            <img src={country} alt="" />
            <div className="info">
              <h4>Descripción del Proyecto</h4>
              <p>Desempeño FullStack.</p>
              <a href="https://fede-countries-app.vercel.app/" target="_blank">
                <h4>Visitalo</h4>
              </a>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay"></div>
            <img src={henrys} alt="" />
            <div className="info">
              <h4>Descripción del Proyecto</h4>
              <p>Desempeño FrontEnd.</p>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay"></div>
            <img src={chatter} alt="" />
            <div className="info">
              <h4>Descripción del Proyecto</h4>
              <p>Desempeño FrontEnd.</p>
            </div>
          </div>
        </div>
        <div className="fila">
          <div className="proyecto">
            <div className="overlay"></div>
            <img src={tech} alt="" />
            <div className="info">
              <p>
                TechPro App, proyecto personal para poner en practica cursos de
                css y responsive design.
              </p>
              <a href="https://tech-pro-app.netlify.app/" target="_blank">
                <h4>Visitalo</h4>
              </a>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay"></div>
            <img src={poke} alt="" />
            <div className="info">
              <h4>Descripción del Proyecto</h4>
              <p>
                PokeGame, juego donde el usuario itenta adivinar la silueta.
              </p>
              <a href="https://pokemon-game-v100.netlify.app/" target="_blank">
                <h4>Visitalo</h4>
              </a>
            </div>
          </div>
          <div className="proyecto">
            <div className="overlay"></div>
            <img src={toktik} alt="" />
            <div className="info">
              <h4>Descripción del Proyecto</h4>
              <p>
                TokTik, replica de la parte de reels de TikTok desarrollada en
                Flutter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
