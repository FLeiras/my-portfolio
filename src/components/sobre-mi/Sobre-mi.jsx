import foto  from '../../../src/images/foto.jpg'

import './Sobre-mi.css'

export const Sobremi = () => {
  return (
    <>
      <div id="sobremi">
        <div className="contenedor-foto">
          <img src={ foto } alt="foto" />
        </div>
        <div className="sobremi">
          <p className="titulo-sobremi">Sobre Mi</p>
          <h2>
            Hola, soy <span>Federico Leiras</span>
          </h2>
          <h3>Desarrollador FullStack</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic veniam
            expedita eaque, autem quidem totam provident eos quis, nostrum nulla
            est. Impedit, doloribus.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <a href="#">Descargar CV</a>
        </div>
      </div>
    </>
  );
};
