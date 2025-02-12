const development = true
const registeredEvents = {};

export const configureEvent = (eventName, listener) => {
  // Verifica se o evento já foi registrado
  if (registeredEvents[eventName]) {
    // console.log(`Replacing listener for event: ${eventName}`);
    // Remove o listener antigo
    window.removeEventListener('message', registeredEvents[eventName].listener);
  } else {
    // console.log(`Registering new listener for event: ${eventName}`);
  }

  // Cria o novo listener
  const newListener = (event) => {
    const data = event.data;

    // Verifica se o evento recebido é do tipo esperado
    if (data && data.eventName === eventName) {
      // console.log("Received Event: " + data.eventName);

      // Verifica se args é um objeto e não um array
      if (data.args && typeof data.args === 'object' && !Array.isArray(data.args)) {
        // Converte os valores do objeto args para um array e passa para o listener
        const argsArray = Object.values(data.args);
        listener(...argsArray);
      } else {
        // Se data.args já for um array ou não existir
        listener(...(data.args || []));
      }
    }
  };

  // Atualiza o registro com o novo listener
  registeredEvents[eventName] = { listener: newListener };

  // Adiciona o novo listener ao window
  window.addEventListener('message', newListener);
};

/*
  Utilizando essa função você pode enviar um evento da UI diretamente para o Servidor
*/
export const emitServerEvent = (eventName, ...args) => {
  fetch(`https://${GetParentResourceName()}/WebviewToServer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      eventName: eventName,
      args: args
    })
  })
  .then(resp => {

  })
  .catch(error => console.error('Error:', error));
}

/*
  Utilizando essa função você pode enviar um evento da UI diretamente para o Client
*/
export const emitClientEvent = (eventName, ...args) => {
  fetch(`https://${GetParentResourceName()}/WebviewToClient`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      eventName: eventName,
      args: args
    })
  })
  .then(resp => {

  })
  .catch(error => console.error('Error:', error));
}

if (development) {
  function GetParentResourceName() {
    return "a"
  }
}
