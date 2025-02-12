import { useEffect, useState } from 'react';
import { configureEvent, emitServerEvent } from '../../../services/events';

import './style.scss';

import ExampleComponent from '../components/ExampleComponent';
import ExampleImageComponent from '../components/ExampleImageComponent';
import ExampleBootstrapModal from '../components/ExampleBootstrapModal';

const ExampleContainer = () => {

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Exemplo para pegar uma Tecla pressionada quando a UI estiver aberta e com `Focus: true`.
      if (event.key === "F2") {
        console.log("Pressed F2");
        
        // Envia um evento para o servidor
        emitServerEvent("Exemple:PressedF2");
        
        event.preventDefault();
      }
    };

    // Adiciona o evento ao pressionar uma tecla
    window.addEventListener("keydown", handleKeyDown);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Este evento será criado quando o resource for inicializado, então, sempre
    // que você chamar este evento ele será recebido aqui
    // Você pode chamar este evento do servidor ou do client.
    configureEvent("EventExample:Any", () => {
      console.log("Evento recebido com sucesso.")
    });
  }, []);

  return (
    <div className='exemple-container'>
      Hello World!
      <hr/>
      <ExampleComponent />
      <div className='bootstrap'>
        <p>Você pode usar componentes do Bootstrap 5 e Icones da Font Awesome 6.</p>
        <ExampleBootstrapModal />
        <hr/>
        <a href='https://getbootstrap.com/docs/5.0' className='btn btn-sm btn-success'>Acessar o Bootstrap 5</a><br/>
        <a href='https://fontawesome.com/icons' className='btn btn-sm btn-warning'>Acessar o Font Awesome 6</a>
      </div>
      <div className='images-container'>
        Exibindo Imagens no React:<br/>
        <ExampleImageComponent />
      </div>
    </div>
  )
}

export default ExampleContainer;