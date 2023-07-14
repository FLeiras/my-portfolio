import foto  from '../../../src/images/fotoMia.jpg'

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
            Soy un apasionado desarrollador de software. Lo que más me motiva en esta industria es la oportunidad de crear soluciones innovadoras 
            y funcionales que mejoren la vida de las personas. Disfruto inmensamente pasar horas desarrollando y buscando soluciones creativas a 
            los desafíos que se presentan. Mi objetivo principal es seguir creciendo y mejorando como profesional.
          </p>
          <p>
          ¡Gracias por visitar mi portfolio y por considerar mi perfil! 
          Si estás interesado en conocer más sobre mi trabajo o en que colabore en algún proyecto, no dudes en contactarme.
          </p>
          <a href="#">Descargar CV</a>
        </div>
      </div>
    </>
  );
};
