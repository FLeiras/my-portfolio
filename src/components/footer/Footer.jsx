import React from 'react';

import './Footer.css';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer>
      <p>Todos los derechos reservados - 2023</p>
      <div className="redes">
        <div className="iconos">
          <a href="https://www.linkedin.com/in/fede-leiras/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/FLeiras" target="_blank">
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};
