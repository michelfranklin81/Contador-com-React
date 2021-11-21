import React, { useState } from "react"; // Chamando um Hook (useState - com vírgula e chaves)

export default function Contador() {
  // Outra forma de exportar a função para utilização posterior
  const [count, setCount] = useState(0); // Crio um state com a const count e setCount para iniciar o contador. o useState deve conter número inicial
  function refreshCount() {
    setCount(count + 1); 
  }
  return (
    <div>
      <h1>Eu vou conseguir</h1>
      <div>{count}</div>
      <button onClick={refreshCount}>Contador</button>
    </div>
  );
}
