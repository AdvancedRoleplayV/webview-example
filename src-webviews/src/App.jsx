import { useState } from 'react';

import ExampleContainer from './bundles/Example/containers/ExampleContainer';

function App() {
  const [showPage, setShowPage] = useState("Example");

  /* 
    <!> Não adicionar funções aqui.

    Todas as funções do seu componente devem ficar dentro do mesmo.
  */

  return (
    <div className="" style={{ height: '100vh', width: '100%' }}>
      <ExampleContainer hidden={showPage != "Example"} />
    </div>
  );
}

export default App;
