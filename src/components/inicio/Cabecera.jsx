import { Nav } from "../navegacion/Nav";

import "./Cabecera.css";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis porro voluptas harum ullam itaque accusamus
                accusantium rerum. Autem dignissimos nam ullam, consequatur non
                vero, recusandae quis repellat accusamus, doloribus aspernatur.
              </p>
              <a href="#portfolio">Ir a Portafolio</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
