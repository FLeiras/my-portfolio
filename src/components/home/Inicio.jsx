import { Cabecera } from '../inicio/Cabecera';
import { Sobremi } from '../sobre-mi/Sobre-mi';
import { Habilidades } from '../habilidades/Habilidades';
import { Proyectos } from '../proyectos/Proyectos';
import { Contacto } from '../contacto/Contacto';
import { Footer } from '../footer/Footer';

export const Inicio = () => {
  return (
    <div>
      <Cabecera />
      <Sobremi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
};
