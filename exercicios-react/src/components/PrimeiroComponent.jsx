import React from 'react';

let isLegal = true;

export default (props) =>
  <div>
    <h1>{props.value}</h1>
    <h2>{1 + 1}</h2>
    <p>Legal? {isLegal ? 'sim' : 'não'}</p>
    <p>{Math.random()}</p>
  </div>

// export default () => <h1>Primeiro Componente!</h1>

// export default function() {
//   return <h1>Primeiro Componente!</h1>
// }

// function primeiro() {
//   return <h1>Primeiro Componente!</h1>
// }

// export default primeiro;