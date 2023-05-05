import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "./Nav.css";

export const Nav = () => {
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
            <div className="icono-nav">
              <AiOutlineMenu />
            </div>
            <div className="iconos">
              <a href="https://www.linkedin.com/in/fede-leiras/">
                <BsLinkedin />
              </a>
              <a href="https://github.com/FLeiras">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
