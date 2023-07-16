import React from 'react';
import Swal from 'sweetalert2';

import './Contacto.css';

export const Contacto = () => {
  const enviarFormulario = async (e) => {
    e.preventDefault();

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch('/.netlify/functions/submitForm', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        form.reset();

        Swal.fire({
          title: '¡Mensaje enviado! Muchas gracias.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
          buttonsStyling: false,
          customClass: {
            confirmButton: 'button-class',
          },
        }).then(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        });

        console.log('Mensaje enviado correctamente');
      } else {
        console.error('Error al enviar el mensaje', response.status);
      }
    } catch (error) {
      console.error('Error al enviar el mensaje', error);
    }
  };

  return (
    <>
      <div id="contacto">
        <h3 className="titulo-seccion">Contactame</h3>
        <div className="contenedor-form">
          <form
            action="https://formspree.io/f/xnqkqkde"
            method="POST"
            onSubmit={enviarFormulario}
          >
            <div className="fila mitad">
              <input
                type="text"
                placeholder="Nombre Completo"
                className="input-mitad"
                name="nombre"
              />
              <input
                type="text"
                placeholder="Dirección de Correo"
                className="input-mitad"
                name="_replyto"
              />
            </div>
            <div className="fila">
              <input
                type="text"
                placeholder="Tema..."
                className="input-full"
                name="tema"
              />
            </div>
            <div className="fila">
              <textarea
                name="mensaje"
                cols="30"
                rows="10"
                placeholder="Tu Mensaje..."
                className="input-full"
              ></textarea>
            </div>

            <input
              type="submit"
              value="Enviar Mensaje"
              className="btn-enviar"
            />
          </form>
        </div>
      </div>
    </>
  );
};

/*https://formspree.io/f/xnqkqkde 

showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        buttonsStyling: false,
        customClass: {
          confirmButton: 'button-class',
        },




*/
