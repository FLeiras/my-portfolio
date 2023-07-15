import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import './Nav.css';

export const Nav = () => {
  const responsiveMenu = () => {
    let x = document.getElementById('nav');
    if (x.className === '') {
      x.className = 'responsive';
    } else {
      x.className = '';
    }
  };

  return (
    <>
      <div className="container-nav">
        <div className="contenido-nav">
          <div className="contenido-nav-links">
            <h1>/FL/</h1>
            <nav id="nav" className="">
              <ul id="links">
                <li>
                  <a href="#inicio">INICIO</a>
                </li>
                <li>
                  <a href="#sobremi">SOBRE MI</a>
                </li>
                <li>
                  <a href="#habilidades">HABILIDADES</a>
                </li>
                <li>
                  <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li>
                  <a href="#contacto">CONTACTO</a>
                </li>
              </ul>
            </nav>

            <div id="icono-nav" onClick={responsiveMenu}>
              <div className="icono-nav">
                <AiOutlineMenu />
              </div>
            </div>
            <div className="iconos">
              <a
                href="https://www.linkedin.com/in/fede-leiras/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://github.com/FLeiras" target="_blank">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
