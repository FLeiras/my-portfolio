import { Nav } from '../navegacion/Nav';

import './Cabecera.css';

export const Cabecera = () => {
  return (
    <>
      <div id="inicio">
        <Nav />
        <div className="presentacion-contenido">
          <div className="presentacion-descripcion">
            <div className="presentacion">
              <p className="bienvenida">Bienvenidos</p>
              <h2>
                Soy <span>Federico Leiras</span>, Desarrollador Fullstack
              </h2>
              <p className="descripcion">
                Hola, soy un apasionado desarrollador Full Stack especializado
                en Frontend. Con una sólida experiencia en atención al cliente y
                una habilidad excepcional para la comunicación, me enorgullezco
                de ofrecer soluciones tecnológicas efectivas y crear
                experiencias digitales atractivas.
              </p>
              <a href="#portfolio">Ir a Portafolio</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
