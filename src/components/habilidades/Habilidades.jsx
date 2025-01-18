import './Habilidades.css';

import {
  bootstrap,
  dart1,
  docker,
  exp,
  flutter,
  git,
  html,
  js,
  mongo,
  node,
  pos,
  postman,
  react,
  ts,
  vue,
} from '../../assets/skills/index.js';

export const Habilidades = () => {
  return (
    <>
      <div id="habilidades">
        <h3 className="titulo-habilidades">Mis Habilidades</h3>
        <div className="fila">
          <div className="titulo-habilidades codigo">
            <h3>Código</h3>
            <img src={js} alt="" />
            <img src={ts} alt="" />
            <img src={html} alt="" />
            <img src={dart1} alt="" />
          </div>
          <div className="titulo-habilidades codigo">
            <h3>Backend</h3>
            <img src={node} alt="" />
            <img src={exp} alt="" />
            <img src={pos} alt="" />
            <img src={mongo} alt="" />
          </div>
          <div className="titulo-habilidades codigo">
            <h3>Frontend</h3>
            <img src={react} alt="" />
            <img src={vue} alt="" />
            <img src={flutter} alt="" />
          </div>
          <div className="titulo-habilidades codigo">
            <h3>Otras</h3>
            <img src={docker} alt="" />
            <img src={git} alt="" />
            <img src={postman} alt="" />
            <img src={bootstrap} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
