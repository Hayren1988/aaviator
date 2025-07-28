const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const url = 'https://bet7k-aviator-api.p.rapidapi.com/bet7k-aviator-latest';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ccb1876774msh4c1a8059662d066p127853jsn19c4f160820a',
      'x-rapidapi-host': 'bet7k-aviator-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erro na requisição RapidAPI', details: error.message })
    };
  }
};