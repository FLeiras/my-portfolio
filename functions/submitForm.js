exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  const formData = JSON.parse(event.body);

  try {
    const axios = require('axios');
    const response = await axios.post(
      'https://formspree.io/f/xnqkqkde',
      formData
    );

    return {
      statusCode: response.status,
      body: JSON.stringify({ message: 'Mensaje enviado correctamente' }),
    };
  } catch (error) {
    console.error('Error al enviar el mensaje', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al enviar el mensaje' }),
    };
  }
};
