import './Habilidades.css';

import js from '../../images/js.png';
import ts from '../../images/ts.png';
import html from '../../images/html.png';
import dart from '../../images/dart1.png';
import node from '../../images/node.png';
import exp from '../../images/express.png';
import pos from '../../images/pos.png';
import mongo from '../../images/mongo.png';
import react from '../../images/react.png';
import vue from '../../images/vue.png';
import flutter from '../../images/flutter.png';
import docker from '../../images/docker.png';
import git from '../../images/git.png';
import postman from '../../images/postman.png';
import boot from '../../images/bootstrap.png';

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
            <img src={dart} alt="" />
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
            <img src={boot} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
